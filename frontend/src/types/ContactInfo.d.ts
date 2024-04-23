import Country from './Country'

type ContactInfo = {
    firstName: string | null,
    lastName?: string | null,
    nickName?: string | null,
    emailAddress1: string | null,   // mandatory
    emailAddress2?: string | null,   
    streetAddress1?: string | null,
    streetAddress2?: string | null,
    city?: string | null,
    postalCode?: string | null,
    state?: string | null,
    country?: Country | null,
    mobilePhone1?: number | null,
    mobilePhone2?: number | null,
    facebookId?: string | null,
    instagramId?: string | null,
    twitterId?: string | null,
    linkedInId?: string | null,
    ticTocId?: string | null,
}

export default ContactInfo