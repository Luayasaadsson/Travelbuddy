import Rating from "../common/Rating"
import User from "../userInfo/User"
import Agent from "./Agent"

type QuestionAnswer = {
    id: string
    user: User
    interactionAgent: Agent 
    expertAgent: Agent
    userQuestion1?: string | null
    agentQuestion1?: string | null
    userAnswer1?: string | null
    agentQuestion2?: string | null
    userAnswer2?: string | null
    agentQuestion3?: string | null
    userAnswer3?: string | null
    agentAnswer?: string  | null
    userRating?: Rating | null
    relatedQuestionAnswers: QuestionAnswer[]
}

export default QuestionAnswer