import Disabilties from "./user/Disabilities"
import Gender from "./common/Gender"
import Language from "./common/Language"

type UserProfile = {
  id: string,
  userId: string,
  preferencesId: string,
  doneTripIds: string[],
  bookedTrip?: Trip[],
  potentialTrips?: Trip[],
  stories: Story[],
  settings: Settings,
}

export default UserProfile