import Language from "../common/Language"
import User from "../user/UserOld"


type Settings = {
    userId: string | null,
    userName?: string | null,
    password: string,
    publicName?: string | null,
    publicAvatarUrl?: string | null,
    notificationViaEmail?: boolean | null,
    notificationViaAppMessage?: boolean | null,
    darkMode: boolean | null
    // applicationLanguage: Language
    // notificationViaSms?: boolean | null,
    // twoFactorAuthentication?: boolean | null
    // accessibilityTextSize?: number | null
    // subscriptionIds?: string[] 
}

export default Settings