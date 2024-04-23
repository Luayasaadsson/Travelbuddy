import Language from "./Language"
import Theme from './Theme'
import Accessibility from "./Accessibility"
import Notifications from "./Notifications"
import Security from "./Security"
import Recipient from "./Recipient"
import Subscriptions from "./Subscription"

type Settings = {
    userName?: string | null,
    password: string,
    publicName?: string | null,
    privateAvatarUrl?: string,
    publicAvatarUrl?: string | null,
    theme: Theme,
    accessibility: Accessibility,
    notifications: Notifications,
    security: Security,
    language: Language,
    subscribers: Recipient[],                                     8
    subscriptions: Subscription[],
}

export default Settings