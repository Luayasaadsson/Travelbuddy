import Disabilties from "./userInfo/Disabilities"
import Gender from "./common/Gender"
import Language from "./common/Language"

type UserProfile = {
  id: string,
  user: User,
  preferences: Preferences,
  doneTrips: Trip[],
  bookedTrips?: Trip[],
  potentialTrips?: Trip[],
  stories: Story[],
  settings: Settings,
}

export default UserProfile