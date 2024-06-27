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
                    create_new_chat: {
                        title: "创建新聊天",
                        title_label: "标题",
                        description_label: "描述（可选）",
                        messaging_service_label: "选择消息服务",
                        create: "创建"
                    },
                    home: {
                        create_new_tab: "开始创建新标签"
                    },
                    user_settings: {
                        title: "用户设置",
                        upgrade_to_premium: "升级到高级版",
                        current_plan: "当前计划：Multichat 免费版",
                        light_dark_mode: "浅色/深色模式",
                        enable_spell_check: "启用拼写检查",
                        select_language: "选择语言",
                        account: "账户",
                        check_for_updates: "检查更新",
                        view_subscription_details: "查看订阅详情",
                        logout: "登出"
                    },
                    chat_settings: {
                        title: "聊天设置",
                        title_label: "标题",
                        enable_audio_notifications: "启用音频通知",
                        enable_message_notifications: "启用消息通知",
                        save_changes: "保存更改"
                    },
                    delete_chat: {
                        title: "删除聊天",
                        text: "你确定要删除这个聊天吗？",
                        subtext: "删除此聊天后，所有数据包括凭据、历史记录和设置将永久丢失。",
                        delete: "删除"
                    },
                    login: {
                        remember_pass: "记住 14 天",
                        trouble_logging_in: "登录遇到问题？",
                        enter_your_email: "输入你的电子邮件",
                        welcome: "欢迎回来！请输入您的详细信息。",
                        login: "登录",
                        email: "电子邮件",
                        password: "密码",
                        forgot_password: "忘记密码？",
                        dont_have_an_account: "还没有账户？",
                        sign_up: "注册"
                    },
                    register: {
                        sign_up: "注册",
                        welcome: "欢迎！请输入您的详细信息。",
                        name: "姓名",
                        email: "电子邮件",
                        password: "密码",
                        enter_your_name: "输入你的名字",
                        enter_your_email: "输入你的电子邮件",
                        remember_me: "记住我",
                        login: "登录",
                        already_have_an_account: "已经有账户？"
                    }
                }
            }

        }
    }
    );

export default i18n;