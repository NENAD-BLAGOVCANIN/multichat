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
                        title: "Create new chat",
                        title_label: "Title",
                        description_label: "Description (optional)",
                        messaging_service_label: "Select messaging service",
                        create: "Create"
                    },
                    home: {
                        create_new_tab: "Start by creating a new tab"
                    },
                    user_settings: {
                        title: "User settings",
                        upgrade_to_premium: "Upgrade to premium",
                        current_plan: "Current plan: Multichat Free",
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
                        text: "Are you sure you want to delete this chat?",
                        subtext: "After you delete this chat, all of your data including your credentials, history and settings will be permanently gone.",
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
                    navbar: {
                        home: "首頁",
                        downloads: "下載",
                        subscriptions: "訂閱",
                        docs: "文檔",
                        sign_up: "註冊"
                    },
                    home: {
                        hero_section: {
                            title: "歡迎來到 Multichat",
                            subtitle: "從一個平台訪問您的所有消息。",
                            download_for_windows: "下載 Windows 版"
                        },
                        section_2: {
                            title: "聚合您的對話",
                            subtitle: `歡迎來到 MultiChat，您的全方位消息解決方案
                                旨在簡化您的數字通信體驗。
                                使用 MultiChat，您可以方便地在一個集中位置管理多個消息服務。
                                告別在應用間切換，迎接輕鬆多任務處理。`
                        },
                        platforms: {
                            title: "Multichat 讓您可以從許多主要的消息平台發送和接收消息："
                        },
                        features: {
                            title: "功能",
                            box_1: {
                                title: "黑暗和光明模式",
                                text: "選擇您喜好的配色方案以減少眼睛疲勞。"
                            },
                            box_2: {
                                title: "鍵盤快捷鍵",
                                text: "使用我們廣泛的鍵盤支持，以光速移動。"
                            },
                            box_3: {
                                title: "可自定義的用戶界面",
                                text: "根據您的喜好自定義用戶界面。"
                            },
                            box_4: {
                                title: "隱私與安全",
                                text: "您的所有消息都經過端到端加密，因此您可以私下與朋友和家人通信。"
                            },
                            box_5: {
                                title: "無限帳戶",
                                text: "打開任意多的標籤，每個標籤都有自己的會話和獨特的憑據。"
                            },
                            box_6: {
                                title: "通知",
                                text: "控制您的通知，在忙碌時暫停或靜音您的消息。"
                            }
                        }
                    },
                    downloads: {
                        downloads: "下載",
                        version: "版本",
                        size: "大小",
                        download_btn: "下載",
                        system_reqs: "系統要求"
                    },
                    footer: {
                        website_description: `您的全方位消息解決方案，旨在簡化您的數字通信體驗。
                            使用 Multichat，您可以方便地在一個集中位置管理多個消息服務。`,
                        newsletter: {
                            label: "註冊我們的新聞通訊：",
                            your_email: "您的電子郵件"
                        },
                        quick_links: "快速連結",
                        home: "首頁",
                        blog: "博客",
                        features_and_privacy: "功能與隱私",
                        info: "信息",
                        privacy_policy: "隱私政策",
                        user_agreement: "用戶協議",
                        about_us: "關於我們",
                        users: "用戶",
                        sign_up: "註冊",
                        log_in: "登錄",
                        contact_support: "聯繫支持",
                        contact: "聯繫",
                        contact_live_support: "聯繫實時支持"
                    },
                    login: {
                        remember_pass: "記住14天",
                        trouble_logging_in: "登錄遇到問題？",
                        enter_your_email: "輸入您的電子郵件",
                        welcome: "歡迎回來！請輸入您的詳細信息。",
                        login: "登錄",
                        email: "電子郵件",
                        password: "密碼",
                        forgot_password: "忘記密碼？",
                        dont_have_an_account: "還沒有帳號？",
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
                        already_have_an_account: "已經有帳號？"
                    }
                }

            },
        }
    }
    );

export default i18n;