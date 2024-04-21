import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { showOverlay, hideOverlay } from "@/store/slices/overlaySlice";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

function ForgotPassword() {
  // Hämtar dispatch funktionen från Redux store.
  const dispatch = useDispatch<AppDispatch>();

  // Hämtar overlayns visningsstatus från Redux store.
  const overlayVisible = useSelector(
    (state: RootState) => state.overlay.isVisible
  );

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-96 w-11/12 flex flex-col items-center gap-4">
        <h1 className="text-secondary text-3xl">Forgot Password</h1>
        <p className="text-secondary text-xs">
          Enter your email account to reset your password
        </p>
        <div className="w-full flex flex-col items-start gap-2">
          <Label className="text-secondary">Email *</Label>
          <Input placeholder="Enter Your Email" />
        </div>
        <Button
          onClick={() => dispatch(showOverlay())}
          className="flex p-3 w-full justify-center items-center gap-2"
        >
          Reset Password
        </Button>
      </div>

      {/* Renderar overlay om overlayVisible är true. */}
      {overlayVisible && (
        <div className="absolute inset-0 mt-8 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-80 h-56 bg-neutral-900 rounded-xl shadow border border-emerald-300 flex flex-col justify-center items-center gap-5 px-10 py-7">
            <div className="flex justify-center items-center">
              <div className="w-11 h-11 bg-emerald-300 rounded-full relative" />
              <img
                className="absolute"
                src="./icons/Email.svg"
                alt="Email icon"
              />
            </div>
            <div className="self-stretch h-28 flex flex-col justify-center items-center ">
              <div className="text-center text-secondary text-base font-bold">
                Check your email
              </div>
              <div className="text-center text-secondary font-small text-xs p-2 leading-normal tracking-wide">
                We have sent password recovery instructions to your email
              </div>
              <Button
                onClick={() => dispatch(hideOverlay())}
                className="p-2 mt-2"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ForgotPassword;
