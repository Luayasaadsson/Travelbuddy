import { Button } from "@/components/ui/button"
import { Switch } from "../ui/switch"

function Settings() {
    return (
        <main className="flex h-screen items-center justify-center pt-24">
            <div className="flex w-11/12 max-w-96 flex-col items-center justify-center">
                <h1 className="text-2xl">Profil</h1>
                <h2 className="ml-2 self-start text-xl">Settings</h2>
                <button className=" m-w- mt-4 flex h-9 w-11/12 cursor-pointer items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/ProfileIcon.svg" alt="Travelicon" />
                        <p>Profile</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer  items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/Travel.svg" alt="Travelicon" />
                        <p>My trips</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer  items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/Version.svg" alt="Travelicon" />
                        <p>Main language</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer  items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/Alert.svg" alt="Travelicon" />
                        <p>Notifications</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <div className=" mt-4 flex h-9 w-11/12 items-center  justify-between border-b-2 border-secondary pl-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/sun.svg" alt="Travelicon" />
                        <p>Appearance</p>
                    </div>
                    <Switch />
                </div>

                <h2 className="ml-2 mt-4 self-start text-xl">Support</h2>
                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer  items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/ProfileIcon.svg" alt="Travelicon" />
                        <p>About us</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/Travel.svg" alt="Travelicon" />
                        <p>Help center</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <h2 className="ml-2 mt-4 self-start text-xl">Feedback</h2>
                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/star-icon.svg" alt="Travelicon" />
                        <p>Rate the app</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className=" mt-4 flex h-9 w-11/12 cursor-pointer items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/pencil-icon.svg" alt="Travelicon" />
                        <p>Give feedback</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <div className="mt-4 flex  gap-3">
                    <Button variant="outline" size="md">
                        <p className="text-neutral-200">Sign out</p>
                        <img
                            className="ml-2 h-6 w-6"
                            src="/images/account.svg"
                            alt="Profileicon"
                        />
                    </Button>
                    <img src="./icons/vector-icon.svg" alt="Vectoricon" />
                    <Button variant="destructive">
                        <p>Delete account</p>
                        <img
                            className="ml-2 h-6 w-6"
                            src="./icons/trash-icon.svg"
                            alt="Trashicon"
                        />
                    </Button>
                </div>
            </div>
        </main>
    )
}
export default Settings
