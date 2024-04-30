//@ts-nocheck
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
    const nationalFoodList = useSelector(
        (state: RootState) => state.user.preferences.nationalFood,
    )
    const [showFoodChoiceButtons, setShowFoodChoiceButtons] = useState(true)
    const [inputQuery, setInputQuery] = useState("")

    const handleFoodChoice = (food) => {
        setShowFoodChoiceButtons(false)
        dispatch(updateMessageList({ id: 1, role: "user", content: food }))
        fetchAgentResponse(food)
    }
    const handleInputSubmit = (e) => {
        e.preventDefault()
        setShowFoodChoiceButtons(false)
        dispatch(
            updateMessageList({ id: 1, role: "user", content: inputQuery }),
        )
        setInputQuery("")
        fetchAgentResponse(inputQuery)
    }

    const fetchAgentResponse = async (query) => {
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
                    id: messageList.length + 1,
                    role: "agent",
                    content: data.response,
                }),
            )
        } catch (error) {
            console.error("Något gick fel i fetchen:", error)
        }
    }

    return (
        <main className="flex h-screen flex-col items-center justify-between gap-4 pt-28">
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
                        {nationalFoodList
                            .filter(
                                (nationalFood) => nationalFood.prefer === true,
                            )
                            .map((nationalFood, index) => (
                                <FoodPreferenceButtons
                                    key={index}
                                    onFoodChoice={handleFoodChoice}
                                    foodPreference={nationalFood.food}
                                />
                            ))}
                    </div>
                )}
            </ChatLog>
            <ChatInput
                handleInputSubmit={handleInputSubmit}
                inputQuery={inputQuery}
                setInputQuery={setInputQuery}
            />
        </main>
    )
}
