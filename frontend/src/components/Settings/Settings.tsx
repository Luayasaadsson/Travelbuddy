import { Button } from "@/components/ui/button";

function Settings() {
  return (
    <main className="pt-28 flex flex-col gap-4 justify-center items-center">
      <div className="flex justify-center">
        <h1 className="text-primary text-2xl">Profile</h1>
      </div>

      <div className="flex flex-col ml-6">
        <h2 className="text-primary text-xl">Settings</h2>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/ProfileIcon.svg" alt="Profileicon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              Profile
              <img
                className="absolute left-[200px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/Travel.svg" alt="Travelicon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              My trips
              <img
                className="absolute left-[200px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/Version.svg" alt="Versionicon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              Main language
              <img
                className="absolute left-[200px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/Alert.svg" alt="Alerticon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              Notifications
              <img
                className="absolute left-[205px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/sun.svg" alt="Sunicon" />
          <div className="flex items-center justify-between w-3/4">
            <span className="text-primary flex items-center relative">
              Appearance
            </span>
            <button className="absolute left-[220px]">
              <img src="./icons/Off.svg" alt="Button" />{" "}
              {/* Detta behöver fixas med en riktig knapp för toggling mellan mörkt/ljust läge */}
            </button>
          </div>

          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="text-primary text-xl">Support</h2>
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/ProfileIcon.svg" alt="Profileicon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              About us
              <img
                className="absolute left-[200px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/Travel.svg" alt="Travelicon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              Help center
              <img
                className="absolute left-[200px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="text-primary text-xl">Feedback</h2>
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/star-icon.svg" alt="Staricon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              Rate the app
              <img
                className="absolute left-[210px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex items-center gap-3 m-4 relative">
          <img src="./icons/pencil-icon.svg" alt="Pencilicon" />
          <div className="flex items-center justify-between w-3/4">
            <button className="text-primary flex items-center relative">
              Give feedback
              <img
                className="absolute left-[210px]"
                src="./icons/Arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
          <img
            className="absolute top-9"
            src="./icons/Underline.svg"
            alt="Underline"
          />
        </div>
        <div className="flex gap-3  mt-4">
          <Button variant="greenOutline" size="md">
            <p>Sign out</p>
            <img
              className="w-6 h-6 ml-2"
              src="/account_circle.svg"
              alt="Profileicon"
            />
          </Button>
          <img src="./icons/vector-icon.svg" alt="Vectoricon" />
          <Button variant="destructive">
            <p>Delete account</p>
            <img
              className="w-6 h-6 ml-2"
              src="./icons/trash-icon.svg"
              alt="Trashicon"
            />
          </Button>
        </div>
      </div>
    </main>
  );
}
export default Settings;
