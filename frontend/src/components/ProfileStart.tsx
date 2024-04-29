import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { useDispatch } from "react-redux"
import { updateChatHeading, updateSubHeading } from "@/store/slices/chatSlice"

function ProfileStart() {
    const dispatch = useDispatch()

    const handleClick = (heading: string, subHeading: string) => {
        dispatch(updateChatHeading(heading))
        dispatch(updateSubHeading(subHeading))
    }
    return (
        <main className="flex h-screen items-center justify-center pt-28">
            <div className="flex w-11/12 max-w-96 flex-col items-center justify-center  gap-8">
                <Avatar
                    className="border-4 border-secondary"
                    style={{
                        borderRadius: "50% 50% 0% 50%",
                    }}
                >
                    <AvatarImage src={"./images/profile-picture.jpg"} />
                    <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-center text-3xl">Hi, Sofia!</h1>
                    <p className="text-center text-sm text-secondary">
                        How can i help you today?
                    </p>
                </div>
                <Button className="justify-between">
                    Find your dream vacation
                    <img src="./icons/icon-location.svg" alt="" />
                </Button>
                <Button className="justify-between">
                    Places to stay nearby
                    <img src="./icons/icon-bed.svg" alt="" />
                </Button>
                <Link className="w-full" to="/chatbot">
                    <Button
                        onClick={() =>
                            handleClick(
                                "Let's find a bite!",
                                "Choose below or type in your cravings at the bottom for restaurants near you!",
                            )
                        }
                        className="justify-between"
                    >
                        Let’s find a place to eat nearby
                        <img src="./icons/icon-food.svg" alt="" />
                    </Button>
                </Link>
                <Button className="justify-between">
                    Experiences & Activities
                    <img src="./icons/icon-activity.svg" alt="" />
                </Button>
                {/* </div> */}
            </div>
        </main>
    )
}

export default ProfileStart
