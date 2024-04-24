import Country from '../common/Country'
import City from '../common/City'
import State from '../common/State'


// TODO: Is there an API we can use to achieve consistent naming of destination locations?

type Destination = {
    place?: string | null,
    city?: City,
    state?: State,
    country?: Country,
}

export default Destination