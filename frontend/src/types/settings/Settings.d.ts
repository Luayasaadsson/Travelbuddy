import Language from "../common/Language"
import Theme from './Theme'
import Accessibility from "./Accessibility"
import Notifications from "./Notifications"
import Security from "./Security"
import Recipient from "../common/Recipient"
import Subscriptions from "./Subscription"
import UserData from "./UserData"
import User from "../userInfo/User"

type Settings = {
    userId: string | null,
    userData: UserData, 
    accessibility: Accessibility,
    theme: Theme,
    notifications: Notifications,
    security: Security,
    applicationLanguage: Language,
    agentsUsed: Agent[]

    // TODO: Where do these belong?
    approvedFollowers: Recipient[],  
    requestedSubscriptions:                                    8
    approvedSubscriptions: Subscription[],


}

export default Settings