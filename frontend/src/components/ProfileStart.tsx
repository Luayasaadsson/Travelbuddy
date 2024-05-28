import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { useDispatch, useSelector } from "react-redux"
import {
    updateChatHeading,
    updateSubHeading,
    updateMessageList,
} from "@/store/slices/chatSlice"
import { RootState } from "@/store/store"
import Message from "@/types/chat/Message"

function ProfileStart() {
    const dispatch = useDispatch()

    // Hämtar användarinformation från Redux store
    const userName = useSelector(
        (state: RootState) => state.user.profile.userName,
    )

    const handleClick = (
        heading: string,
        subHeading: string,
        message: Message,
    ) => {
        dispatch(updateChatHeading(heading))
        dispatch(updateSubHeading(subHeading))
        dispatch(updateMessageList(message))
    }

    return (
        <main className="flex h-screen items-center justify-center">
            <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-8 lg:max-w-3xl">
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
                    <h1 className="text-center text-3xl">Hi, {userName}!</h1>
                    <p className="text-center text-sm text-secondary">
                        How can i help you today?
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
                    <div className="flex w-full flex-col items-start gap-4">
                        <Link className="w-full" to="/vacationchat">
                            <Button
                                onClick={() =>
                                    handleClick(
                                        "Let's find your dream vacation!",
                                        "Choose below or type in your dream vacation at the bottom!",
                                        {
                                            type: "text",
                                            role: "agent",
                                            content:"test",
                                        },
                                    )
                                }
                                className="justify-between"
                            >
                                Find your dream vacation
                                <img src="./icons/icon-location.svg" alt="" />
                            </Button>
                        </Link>
                        <Link className="w-full" to="/foodchat">
                            <Button
                                onClick={() =>
                                    handleClick(
                                        "Let's find a bite!",
                                        "Choose below or type in your cravings at the bottom for restaurants near you!",
                                        {
                                            type: "text",
                                            role: "agent",
                                            content:
                                                "Hi, where do you want to stay?",
                                        },
                                    )
                                }
                                className="justify-between"
                            >
                                Places to stay nearby
                                <img src="./icons/icon-bed.svg" alt="" />
                            </Button>
                        </Link>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4">
                        <Link className="w-full" to="/foodchat">
                            <Button
                                onClick={() =>
                                    handleClick(
                                        "Let's find a bite!",
                                        "Choose below or type in your cravings at the bottom for restaurants near you!",
                                        {
                                            type: "text",
                                            role: "agent",
                                            content:
                                                "Hi, what do you want to eat today?",
                                        },
                                    )
                                }
                                className="justify-between"
                            >
                                Let’s find a place to eat nearby
                                <img src="./icons/icon-food.svg" alt="" />
                            </Button>
                        </Link>
                        <Link className="w-full" to="/foodchat">
                            <Button
                                onClick={() =>
                                    handleClick(
                                        "Let's find a bite!",
                                        "Choose below or type in your cravings at the bottom for restaurants near you!",
                                        {
                                            type: "text",
                                            role: "agent",
                                            content:
                                                "Hi, Experiences & Activities?",
                                        },
                                    )
                                }
                                className="justify-between"
                            >
                                Experiences & Activities
                                <img src="./icons/icon-activity.svg" alt="" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfileStart
