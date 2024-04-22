import { Button } from "@/components/ui/button";
import { Switch } from "../ui/switch";

function Settings() {
    return (
        <main className="pt-28 w-full flex flex-col gap-4 justify-center items-center">
            <div className="flex w-11/12 max-w-96 flex-col justify-center items-center">
                <h1 className="text-primary text-2xl">Profil</h1>
                <h2 className="text-primary text-xl self-start ml-2">
                    Settings
                </h2>
                <button className=" w-11/12 m-w- border-b-2 h-9 mt-4 px-4 border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/ProfileIcon.svg" alt="Travelicon" />
                        <p>Profile</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4  border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/Travel.svg" alt="Travelicon" />
                        <p>My trips</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4  border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/Version.svg" alt="Travelicon" />
                        <p>Main language</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4  border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/Alert.svg" alt="Travelicon" />
                        <p>Notifications</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <div className=" w-11/12 border-b-2 h-9 mt-4 pl-4  border-secondary text-secondary flex items-center justify-between">
                    <div className="flex gap-4">
                        <img src="./icons/sun.svg" alt="Travelicon" />
                        <p>Appearance</p>
                    </div>
                    <Switch />
                </div>

                <h2 className="text-primary text-xl self-start mt-4 ml-2">
                    Support
                </h2>
                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4  border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/ProfileIcon.svg" alt="Travelicon" />
                        <p>About us</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4 border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/Travel.svg" alt="Travelicon" />
                        <p>Help center</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <h2 className="text-primary text-xl self-start mt-4 ml-2">
                    Feedback
                </h2>
                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4 border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/star-icon.svg" alt="Travelicon" />
                        <p>Rate the app</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" w-11/12 border-b-2 h-9 mt-4 px-4 border-secondary text-secondary flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4">
                        <img src="./icons/pencil-icon.svg" alt="Travelicon" />
                        <p>Give feedback</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <div className="flex gap-3  mt-4">
                    <Button variant="outline" size="md">
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
