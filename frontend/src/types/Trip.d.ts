import Destination from "./Destination"
import Traveller from "./Traveller"



type Trip = {
    destination: Destination[],
    travellers: Traveller[],
    date?: Date | null,
}

export default Trip