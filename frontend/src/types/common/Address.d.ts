import StreetAddress from "./StreetAddress"

type Address = {
    streetAddress: StreetAddress | null,
    apartmentInfo?: ApartmentInfo | null,
    postOfficeBox?: PostOfficeBox | null,
    city?: City | null,
    postalCode?: PostalCode | null,
    state?: State | null,
    country?: Country | null,
}

export default Address