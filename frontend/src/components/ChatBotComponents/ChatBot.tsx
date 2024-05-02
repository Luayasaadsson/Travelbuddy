//@ts-nocheck
import ChatLoader from "./ChatLoader"
import ChatHeading from "./ChatHeading"
import ChatLog from "./ChatLog"
import FoodPreferenceButtons from "./FoodPreferenceButtons"
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { updateMessageList } from "@/store/slices/chatSlice"
import promptsData from "./prompts.json"

export default function ChatBot() {
    const dispatch = useDispatch()
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const foodList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const [showFoodChoiceButtons, setShowFoodChoiceButtons] = useState(true)
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleFoodChoice = (food) => {
        setShowFoodChoiceButtons(false)
        dispatch(updateMessageList({ role: "user", content: food }))
        fetchAgentResponse(food)
    }
    const handleInputSubmit = (e) => {
        e.preventDefault()
        setShowFoodChoiceButtons(false)
        dispatch(updateMessageList({ role: "user", content: inputQuery }))
        setInputQuery("")
        fetchAgentResponse(inputQuery)
    }

    const fetchAgentResponse = async (query) => {
        setIsLoading(true)
        try {
            const context = messageList
                .map((message) => message.content)
                .join("\n")
            const fullQuery = `${context}\n${query}`

            const response = await fetch(
                "http://localhost:5127/api/OpenAi/AskAiAssistant",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        question: fullQuery,
                        prompt: promptsData.prompts[0].text,
                    }),
                },
            )

            if (!response.ok) {
                throw new Error("Nätverksproblem")
            }

            const data = await response.json()
            dispatch(
                updateMessageList({
                    role: "agent",
                    content: data.response,
                }),
            )
        } catch (error) {
            console.error("Något gick fel i fetchen:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="flex h-screen w-full flex-col items-center justify-between gap-4 pt-28">
            <ChatHeading />
            <ChatLog>
                {messageList.map((message, index) => (
                    <ChatMessage
                        messageContent={message.content}
                        messageRole={message.role}
                        key={index}
                    />
                ))}

                {showFoodChoiceButtons && (
                    <div className="flex w-11/12 flex-wrap justify-center gap-2">
                        {foodList
                            .filter((food) => food.like === true)
                            .map((food, index) => (
                                <FoodPreferenceButtons
                                    key={index}
                                    onFoodChoice={handleFoodChoice}
                                    foodPreference={food.country}
                                />
                            ))}
                    </div>
                )}
                {isLoading && <ChatLoader />}
            </ChatLog>
            <ChatInput
                handleInputSubmit={handleInputSubmit}
                inputQuery={inputQuery}
                setInputQuery={setInputQuery}
            />
        </main>
    )
}
