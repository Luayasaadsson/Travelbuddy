//@ts-nocheck
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useDispatch, useSelector } from "react-redux"
import chatSlice from "@/store/slices/chatSlice"
import { RootState } from "@/store/store"

export default function ChatBot({}) {
    const heading = useSelector((state: RootState) => state.chat.heading)
    const subHeading = useSelector((state: RootState) => state.chat.subHeading)
    const messageList = useSelector((state) => state.chat.messageList)
    const nationalFoodList = useSelector(
        (state: RootState) => state.user.preferences.nationalFood,
    )

    const [foodChoice, setFoodChoice] = useState("")

    const handleFoodChoice = (food) => {
        setFoodChoice(food)
    }

    return (
        <main className="flex h-screen flex-col items-center justify-between gap-4 pt-28">
            <div className="flex w-11/12 flex-col items-center justify-center gap-2 p-2">
                <h1 className="w-45 text-center text-3xl text-secondary">
                    {heading}
                </h1>
                <p className="text-center text-sm text-secondary">
                    {subHeading}
                </p>
            </div>
            <div className="flex h-full w-10/12 max-w-96 flex-col gap-4 overflow-y-auto">
                {messageList.map((message) =>
                    message.role === "agent" ? (
                        <AgentMessage
                            messageContent={message.content}
                            key={message.id}
                        />
                    ) : (
                        <UserMessage messageContent={message.content} />
                    ),
                )}
                {nationalFoodList.map((nationalFood, index) =>
                    nationalFood.prefer === true ? (
                        <FoodPreferenceButtons
                            key={index}
                            onFoodChoice={handleFoodChoice}
                            foodPreference={nationalFood.food}
                        />
                    ) : null,
                )}
            </div>

            <div className="mb-8 w-11/12 max-w-96">
                <Label>Whats your cravings?</Label>
                <Input placeholder="Enter Your Cravings" />
            </div>
        </main>
    )
}

function FoodPreferenceButtons({ onFoodChoice, foodPreference }) {
    return (
        <div className="flex w-11/12 flex-wrap justify-center gap-2">
            <Button
                variant="greenOutline"
                size="prompt"
                onClick={() => onFoodChoice("French")}
            >
                {foodPreference}
            </Button>
        </div>
    )
}

function UserMessage({ messageContent }) {
    return <p className="userPrompt">{messageContent}</p>
}

function AgentMessage({ messageContent }) {
    return <p className="botPrompt">{messageContent}</p>
}
