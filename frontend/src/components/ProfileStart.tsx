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
    let foodPreferences = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
        .filter((food) => food.selected === true)
        .map((food) => food.label)
        .join(", ")

    if (foodPreferences === "") {
        foodPreferences = useSelector(
            (state: RootState) => state.user.preferences.food,
        )
            .filter((food) => food.selected === false)
            .map((food) => food.label)
            .join(", ")
    }

    const accomodationPreferences = useSelector(
        (state: RootState) => state.user.preferences.accomodation,
    )
        .filter((accomodation) => accomodation.selected === true)
        .map((accomodation) => accomodation.label)
        .join(", ")
    const vacationPreferences = useSelector(
        (state: RootState) => state.user.preferences.vacation,
    )
        .filter((vacation) => vacation.selected === true)
        .map((vacation) => vacation.label)
        .join(", ")

    const handleClick = (
        heading: string,
        subHeading: string,
        agentMessage: Message,
        userMessage: Message,
    ) => {
        dispatch(updateChatHeading(heading))
        dispatch(updateSubHeading(subHeading))
        dispatch(updateMessageList(agentMessage))
        dispatch(updateMessageList(userMessage))
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
                                            content:
                                                "Hi, find your dream vacation?",
                                        },
                                        {
                                            type: "button",
                                            role: "user",
                                            content: vacationPreferences,
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
                                        {
                                            type: "button",
                                            role: "user",
                                            content: accomodationPreferences,
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
                                        {
                                            type: "button",
                                            role: "user",
                                            content: foodPreferences,
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
                                        {
                                            type: "text",
                                            role: "user",
                                            content: vacationPreferences,
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
