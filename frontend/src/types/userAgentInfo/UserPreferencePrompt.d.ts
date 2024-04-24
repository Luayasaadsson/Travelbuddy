import User from "../userInfo/User"
import Preferences from "../preferenceInfo/Preferences"


type UserPreferencePrompts = {
    id: string
    user: User
    preferences: Preferences    
}

export default UserPreferencePrompts

