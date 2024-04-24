import Rating from "../common/Rating"
import User from "../userInfo/User"
import Agent from "./Agent"
import QuestionAnswer from "./QuestionAnswer"


type UserAgentRating = {
    user: User
    interactionAgent: Agent
    expertAgent: Agent
    rating: Rating 
    questionAnswer: QuestionAnswer
    date: Date
}

export default UserAgentRating