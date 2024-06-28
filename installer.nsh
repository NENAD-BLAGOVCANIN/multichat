!include "MUI2.nsh"
!include "nsDialogs.nsh"

Var Dialog
Var Checkbox
Var State

!macro customHeader
  !define MUI_PAGE_CUSTOMFUNCTION_SHOW MUI_CUSTOMFUNCTION_SHOW
!macroend

!macro MUI_CUSTOMFUNCTION_SHOW
  nsDialogs::Create /NOUNLOAD 1018
  Pop $Dialog
  
  ${NSD_CreateCheckbox} 0 50% 100% 10u "Run Multichat at startup"
  Pop $Checkbox
  ${NSD_Check} $Checkbox
  nsDialogs::Show
!macroend

!macro customInstall
  SendMessage $Checkbox ${BM_GETCHECK} 0 0 $State
  WriteINIStr "$PLUGINSDIR\state.ini" "Settings" "RunAtStartup" $State
  StrCmp $State ${BST_CHECKED} 0 noStartup
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Multichat" "$INSTDIR\Multichat.exe"
  noStartup:
!macroend

!macro un.customUnInstall
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Multichat"
!macroend

Function .onInit
  InitPluginsDir
FunctionEnd

Function .onInstSuccess
  Call customInstall
FunctionEnd

Function un.onUninstSuccess
  Call un.customUnInstall
FunctionEnd

Page custom MUI_CUSTOMFUNCTION_SHOW

!insertmacro customHeader
