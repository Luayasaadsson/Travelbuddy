import Language from "../common/Language"
import User from "../user/User"


type Setting = {
    userId: string | null,
    // LoginInfo and PublicInfo
    userName?: string | null,
    password: string,
    publicName?: string | null,
    publicAvatarUrl?: string | null,
    // Notification Settings
    notificationViaEmail?: boolean | null,
    notificationViaAppMessage?: boolean | null,
    notificationViaSms?: boolean | null,
    // Security
    twoFactorAuthentication?: boolean | null
    // Theme
    darkMode: boolean | null
    // Language & Accessibility
    applicationLanguage: Language
    accessibilityTextSize?: number | null
    // Publication and Subscription
    subscriptionIds?: string[] 
}

export default Setting