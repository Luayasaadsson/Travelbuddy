import User from "../userInfo/User"
import Preferences from "../preferences/Preferences"


type UserPreferencePrompts = {
    id: string
    user: User
    preferences: Preferences    
}

export default UserPreferencePrompts

