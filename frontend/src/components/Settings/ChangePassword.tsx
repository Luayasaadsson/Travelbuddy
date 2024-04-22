import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ChangePassword() {
  return (
    <main className="h-screen pt-28 flex flex-col items-center justify-start">
      <div className="flex flex-col justify-center items-center w-11/12 gap-6">
        <div className="flex justify-center">
          <h1 className="text-primary text-2xl font-bold">Change password</h1>
        </div>
        <div className="flex max-w-96 w-11/12 flex-col items-start gap-2">
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">Email *</Label>
            <Input placeholder="Enter Your Email" />
          </div>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">Current password *</Label>
            <Input placeholder="Enter Your Password" />
          </div>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">New password *</Label>
            <Input placeholder="Enter Your Password" />
          </div>
          <div className="flex max-w-96 w-full flex-col ">
            <Label className="text-secondary gap-2">
              Confirm new password *
            </Label>
            <Input placeholder="Enter Your Password" />
          </div>
        </div>

        <Button className="flex p-3 max-w-96 w-full justify-center items-center gap-2">
          Save changes
        </Button>
      </div>
    </main>
  );
}

export default ChangePassword;
