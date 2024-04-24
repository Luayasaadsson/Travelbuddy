import Language from "../common/Language"
import User from "../userInfo/User"
import UserPreferencePrompts from "../userAgentInfo/UserPreferencePrompt"
import InteractionHistoryPrompts from "../userAgentInfo/HistoricalQuestionAnswers"
import UserAgentRating from "../userAgentInfo/UserAgentRating"
import HistoricalQuestionAnswers from "../userAgentInfo/HistoricalQuestionAnswers"


type Settings = {
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
    OutgoingSubscriptionRequestsPending: User[]
    OutgoingSubscriptionRequestsDenied: User[]
    OutgoingSubscriptionRequestsApproved: User[]
    IncomingSubscriptionRequestsPending: User[]
    IncomingSubscriptionRequestsDenied: User[]
    IncomingSubscriptionRequestsApproved: User[]
    // Agents
    agentsUsed: Agent[]
    userPreferencePrompts: UserPreferencePrompt[] 
    historicalQuestionAnswers: HistoricalQuestionAnswer[]
    userAgentRatings: UserAgentRating[]
}

export default Settings