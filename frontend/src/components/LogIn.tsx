import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

function LogIn() {
  return (
    <main className="h-screen pt-28 flex flex-col gap-4 items-center justify-start">
      <h1 className="text-primary text-3xl text-center">
        Login <br /> Welcome back!
      </h1>
      <div className="flex w-96 flex-col items-start gap-2">
        <Label className="text-primary ">Email *</Label>
        <Input placeholder="Enter Your Email" />
        <div className="relative flex w-full flex-col items-start gap-2">
          <Label className="text-primary pt-2">Password *</Label>
          <Input placeholder="Enter Your Password" className="pr-10" />
          <img
            src="./icons/visibility.svg"
            alt="Show password"
            className="absolute top-12 right-3 inset-y-0"
          />
        </div>
        <p className="text-primary mt-0 w-full flex justify-end text-sm underline underline-offset-4 cursor-pointer">
          Forgot password?
        </p>
      </div>
      <div className="w-[371px] h-10 justify-end items-center gap-2.5 inline-flex">
        <div className="text-neutral-200 text-sm leading-tight tracking-tight">
          Stay signed in?
        </div>
        <div className="w-9 h-9 relative rounded-md border border-neutral-200 cursor-pointer" />
      </div>
      <Button className="flex p-3 w-96 justify-center items-center gap-2">
        Login
      </Button>
      <p className="text-neutral-200 text-center">
        Don't have ac account?{" "}
        <span className="text-primary underline underline-offset-4 cursor-pointer">
          Signup here!
        </span>
      </p>
      <div className="w-[313px] h-[21px] justify-start items-center gap-[9px] inline-flex">
        <div className="w-[139px] h-[0px] border border-emerald-300"></div>
        <div className="text-neutral-300 text-sm font-normal">Or</div>
        <div className="w-[139px] h-[0px] border border-emerald-300"></div>
      </div>

      <div className="w-[361px] h-[50px] p-3 bg-blue-600 rounded-md shadow border border-neutral-200 justify-between items-center inline-flex cursor-pointer">
        <div className="w-[26px] h-[26px] relative">
          <img
            className="w-[26px] h-[26px] left-0 top-0 absolute"
            src="./icons/facebook-logo.svg"
          />
        </div>
        <div className="grow shrink basis-0 text-center text-white text-sm font-medium leading-tight tracking-tight">
          Login with Facebook
        </div>
      </div>

      <div className="w-[361px] h-[50px] p-3 rounded-md shadow border border-neutral-200 justify-between items-center inline-flex cursor-pointer">
        <div className="w-[26px] h-[26px] relative">
          <img
            className="w-[26px] h-[26px] left-0 top-0 absolute"
            src="./icons/google-logo.svg"
          />
        </div>
        <div className="grow shrink basis-0 text-center text-neutral-200 text-sm font-medium leading-tight tracking-tight">
          Login with Google
        </div>
      </div>
    </main>
  );
}

export default LogIn;
