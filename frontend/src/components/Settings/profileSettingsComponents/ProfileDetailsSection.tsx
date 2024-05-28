import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type ProfileDetailsSectionProps = {}

// Komponent för att visa användarinformation och profildetaljer
const ProfileDetailsSection: React.FC<ProfileDetailsSectionProps> = () => {
    return (
        <div className="flex w-full flex-col items-start gap-4 text-secondary">
            {/* <p className="text-xl text-primary">Username</p> */}
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">First name *</Label>
                <Input placeholder="Enter your first name" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Last name *</Label>
                <Input placeholder="Enter your last name" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Username *</Label>
                <Input placeholder="Enter your username" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">City *</Label>
                <Input placeholder="Enter the name of your city" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Country *</Label>
                <Input placeholder="Enter the name of your country" />
            </div>
        </div>
    )
}

export default ProfileDetailsSection
