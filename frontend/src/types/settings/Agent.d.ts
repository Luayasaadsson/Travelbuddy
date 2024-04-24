import Role from './Role'
import Capability from './Capability'
import KnowledgeBase from './KnowledgeBase'
import QuestionAnswer from './QuestionAnswer'


type Agent = {
    id: string
    name?: string | null
    role?: Role | null
    capability?: Capability | null
    knowledgeBase?: KnowledgeBase | null
    questionAnswers: QuestionAnswer[]

}

export default Agent