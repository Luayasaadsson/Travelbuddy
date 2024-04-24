import User from "../userInfo/User"
import UserPreferencePrompts from "./UserPreferencePrompt"
import UserAgentRating from "./UserAgentRating"
import HistoricalQuestionAnswers from "./HistoricalQuestionAnswers"


type UserAgent = {
    id: string 
    user: User 
    agentsUsed: Agent[]
    userPreferencePrompts: UserPreferencePrompt[] 
    historicalQuestionAnswers: HistoricalQuestionAnswer[]
    userAgentRatings: UserAgentRating[]
}

export default UserAgent