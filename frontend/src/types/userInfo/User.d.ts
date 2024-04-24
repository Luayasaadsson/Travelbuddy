import Country from '../common/Country'
import Gender from '../common/Gender'
import Language from '../common/Language'
import Child from './Child'
import GrandChild from './GrandChild'
import Parent from './Parent'
import Partner from './Partner'
import Sibling from './Sibling'


type User = {
    firstName: string | null,
    lastName?: string | null,
    nickName?: string | null,
    emailAddressPrivate1: string | null,   // mandatory
    emailAddressPrivate2?: string | null,   
    emailAddressBusiness?: string | null,
    address?: Address,
   
    mobilePhone1?: number | null,
    mobilePhone2?: number | null,
    facebookId?: string | null,
    instagramId?: string | null,
    twitterId?: string | null,
    linkedInId?: string | null,
    ticTocId?: string | null,
    dateOfBirth?: Date,
    gender?: Gender,
    languageFirst?: Language,
    languageSecond?: Language,
    languageThird?: Language,
    partner?: Partner[],
    children?: Child[],
    grandChildren?: GrandChild[],
    parents?: Parents[],
    siblings?: Sibling[],
    friends?: Friend[],
    colleagues?: Colleague[],
    noDisabilty?: boolean | null,
    visualImpairment?: boolean | null,
    hearingImpairment?: boolean | null,
    speechImpairment?: boolean | null,
    mobilityImpairment?: boolean | null,
    cognitiveDisabilities?: boolean | null,
    neurologicalDisorders?: boolean | null,
    otherDisabilities?: boolean | null,
    commentOnDisabilities?: string | null,
}

export default User