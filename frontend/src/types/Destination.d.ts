import Country from './Country'

type Destination = {
    place?: string | null,
    closestCity?: string | null,
    state?: string | null,
    country?: Country,
}

export default Destination