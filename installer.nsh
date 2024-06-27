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
  ${If} ${NSD_GetState} $Checkbox $State
  ${If} $State == ${BST_CHECKED}
    WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Multichat" "$INSTDIR\Multichat.exe"
  ${EndIf}
!macroend

!macro customUnInstall
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Multichat"
!macroend

!insertmacro customHeader
!insertmacro customInstall
!insertmacro customUnInstall
