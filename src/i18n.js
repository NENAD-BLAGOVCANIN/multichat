import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    create_new_chat: {
                        title: "Create new tab",
                        title_label: "Title",
                        title_placeholder: "ex. WhatsApp Business Account",
                        description_label: "Description (optional)",
                        description_placeholder: "ex. Messages from my clients.",
                        messaging_service_label: "Select messaging service",
                        create: "Create"
                    },
                    home: {
                        create_new_tab: "Start by creating a new tab"
                    },
                    account_dropdown: {
                        accountSettings: "Account Settings",
                        about: "About",
                        help: "Help"
                    },
                    user_settings: {
                        title: "User settings",
                        accountPreferences: "Account Preferences",
                        privacyAndProtection: "Privacy & Protection",
                        about: "About",
                        upgrade_to_premium: "Upgrade to premium",
                        current_plan: "Current plan: ",
                        light_dark_mode: "Light/dark mode",
                        enable_spell_check: "Enable spell check",
                        select_language: "Select language",
                        account: "Account",
                        check_for_updates: "Check for updates",
                        view_subscription_details: "View subscription details",
                        logout: "Logout"
                    },
                    chat_settings: {
                        title: "Chat settings",
                        title_label: "Title",
                        enable_audio_notifications: "Enable Audio notifications",
                        enable_message_notifications: "Enable Message Notifications",
                        save_changes: "Save changes"
                    },
                    delete_chat: {
                        title: "Delete chat",
                        text: "Are you sure you want to remove this tab?",
                        subtext: "After you delete this tab, all of your data including your credentials, history and settings will be permanently lost.",
                        delete: "Delete"
                    },
                    login: {
                        remember_pass: "Remember for 14 days",
                        trouble_logging_in: "Trouble logging in?",
                        enter_your_email: "Enter your email",
                        welcome: "Welcome back! Please enter your details.",
                        login: "Log In",
                        email: "Email",
                        password: "Password",
                        forgot_password: "Forgot password?",
                        dont_have_an_account: "Don't have an account?",
                        sign_up: "Sign Up"
                    },
                    register: {
                        sign_up: "Sign Up",
                        welcome: "Welcome! Please enter your details.",
                        name: "Name",
                        email: "Email",
                        password: "Password",
                        enter_your_name: "Enter your name",
                        enter_your_email: "Enter your email",
                        remember_me: "Remember Me",
                        login: "Log In",
                        already_have_an_account: "Already have an account?",
                    }
                }
            },
            zh: {

                translation: {
                    create_new_chat: {
                        title: "創建新標籤頁",
                        title_label: "標題",
                        title_placeholder: "例如：WhatsApp 商業賬戶",
                        description_label: "描述（可選）",
                        description_placeholder: "例如：來自我客戶的消息。",
                        messaging_service_label: "選擇消息服務",
                        create: "創建"
                    },
                    home: {
                        create_new_tab: "從創建新標籤頁開始"
                    },
                    account_dropdown: {
                        accountSettings: "帳戶設置",
                        about: "關於",
                        help: "幫助"
                    },
                    user_settings: {
                        title: "用戶設置",
                        accountPreferences: "帳戶偏好",
                        privacyAndProtection: "隱私與保護",
                        about: "關於",
                        upgrade_to_premium: "升級到高級版",
                        current_plan: "當前計劃：",
                        light_dark_mode: "亮/暗模式",
                        enable_spell_check: "啟用拼寫檢查",
                        select_language: "選擇語言",
                        account: "帳戶",
                        check_for_updates: "檢查更新",
                        view_subscription_details: "查看訂閱詳情",
                        logout: "登出"
                    },
                    chat_settings: {
                        title: "聊天設置",
                        title_label: "標題",
                        enable_audio_notifications: "啟用音頻通知",
                        enable_message_notifications: "啟用消息通知",
                        save_changes: "保存更改"
                    },
                    delete_chat: {
                        title: "刪除聊天",
                        text: "您確定要刪除此標籤頁嗎？",
                        subtext: "刪除此標籤頁後，您的所有數據，包括憑據、歷史記錄和設置，都將被永久刪除。",
                        delete: "刪除"
                    },
                    login: {
                        remember_pass: "記住14天",
                        trouble_logging_in: "登錄有困難？",
                        enter_your_email: "輸入您的電子郵件",
                        welcome: "歡迎回來！請輸入您的詳細信息。",
                        login: "登錄",
                        email: "電子郵件",
                        password: "密碼",
                        forgot_password: "忘記密碼？",
                        dont_have_an_account: "還沒有帳戶？",
                        sign_up: "註冊"
                    },
                    register: {
                        sign_up: "註冊",
                        welcome: "歡迎！請輸入您的詳細信息。",
                        name: "姓名",
                        email: "電子郵件",
                        password: "密碼",
                        enter_your_name: "輸入您的姓名",
                        enter_your_email: "輸入您的電子郵件",
                        remember_me: "記住我",
                        login: "登錄",
                        already_have_an_account: "已有帳戶？"
                    }
                }

            }

        }
    }
    );

export default i18n;