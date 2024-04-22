import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ProfileSettings() {
  return (
    <main className="h-screen pt-28 flex flex-col gap-4 items-center justify-start">
      <div className="flex flex-col justify-center items-center w-11/12 gap-6">
        <div className="flex justify-center">
          <h1 className="text-primary text-2xl font-bold">Profile settings</h1>
        </div>
        <div className="flex max-w-96 w-11/12 flex-col items-start gap-2">
          <p className="text-primary text-xl">Profile information</p>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">Name *</Label>
            <Input placeholder="Enter your name" />
          </div>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">Last name *</Label>
            <Input placeholder="Enter your lastname" />
          </div>
        </div>
        <div className="flex max-w-96 w-11/12 flex-col items-start gap-2">
          <p className="text-primary text-xl">Contact details</p>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">Email *</Label>
            <Input placeholder="Enter your email" />
          </div>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">Phone number *</Label>
            <Input placeholder="Enter your phone number" />
          </div>
        </div>
        <Button className="flex p-3 max-w-96 w-11/12 justify-center items-center gap-2">
          Save changes
        </Button>
      </div>
    </main>
  );
}

export default ProfileSettings;
