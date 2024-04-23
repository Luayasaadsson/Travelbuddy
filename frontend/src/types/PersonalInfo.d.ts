import Gender from './Gender'
import Language from './Language'
import Disabilties from './Disabilities'

type PersonalInfo = {
    dateOfBirth?: Date,
    gender?: Gender,
    disabilities?: Disabilties,
    languageFirst?: Language,
    languageSecond?: Language,
    languageThird?: Language,
    children?: Child[],
    emailAddressOfPartner?: string | null,
}

export default PersonalInfo
