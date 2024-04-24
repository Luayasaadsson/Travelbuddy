import User from "../userInfo/User"
import Agent from "./Agent"
import QuestionAnswer from "./QuestionAnswer"


type HistoricalQuestionAnswers = {
    id: string
    user: User
    interactingAgent: Agent
    expertAgent: Agent
    questionAnswers: QuestionAnswer[]
}

export default HistoricalQuestionAnswers