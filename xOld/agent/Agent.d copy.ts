import Role from '../../frontend/src/types/chat/Role'
import Capability from '../../frontend/src/types/userAgent/Capability'
import KnowledgeBase from '../../frontend/src/types/userAgent/KnowledgeBase'
import QuestionAnswer from '../../frontend/src/types/userAgent/QuestionAnswer'


type Agent = {
    id: string
    name?: string | null
    role?: Role | null
    capability?: Capability | null
    knowledgeBase?: KnowledgeBase | null
    questionAnswersIds: string[]   
}

export default Agent