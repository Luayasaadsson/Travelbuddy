import Disabilties from "./Disabilities"
import Gender from "./Gender"
import Language from "./Language"

type User = {
  id: string,
  contactInfo: ContactInfo,
  personalInfo: PersonalInfo,
  preferences: Preferences,
  doneTrips: Trip[],
  bookedTrips?: Trip[],
  potentialTrips?: Trip[],
  stories: Story[],
  settings: Settings,
}

export default User