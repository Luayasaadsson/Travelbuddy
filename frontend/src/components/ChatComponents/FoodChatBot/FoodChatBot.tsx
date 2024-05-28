import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { updateMessageList } from "@/store/slices/chatSlice"
import ChatLoader from "../ChatLoader"
import ChatHeading from "../ChatHeading"
import ChatLog from "../ChatLog"
import FoodPreferenceButtons from "./FoodPreferenceButtons"
import ChatInput from "../ChatInput"
import ChatMessage from "../ChatMessage"
import ButtonContainer from "../ButtonContainer"

export default function FoodChatBot() {
    const dispatch = useDispatch()
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const foodList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const [showPreferenceButtons, setShowPreferenceButtons] = useState(true)

    // Delay function
    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    const handleFoodChoice = (buttonChoice: string): void => {
        setShowPreferenceButtons(false)

        dispatch(
            updateMessageList({
                type: "text",
                role: "user",
                content: buttonChoice,
            }),
        )

        fetchAgentResponse(buttonChoice)
    }

    const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setShowPreferenceButtons(false)
        dispatch(
            updateMessageList({
                type: "text",
                role: "user",
                content: inputQuery,
            }),
        )
        setInputQuery("")
        fetchAgentResponse(inputQuery)
    }

    const generatePrompt = (context: string, query: string): string => {
        const countryKeywords = foodList.map((food) => food.label.toLowerCase())
        const foodKeywords = ["want", "crave", "for", "like"]

        let isCountryQuery = false
        let isFoodQuery = false

        for (const keyword of countryKeywords) {
            if (query.toLowerCase().includes(keyword)) {
                isCountryQuery = true
                break
            }
        }

        for (const keyword of foodKeywords) {
            if (query.toLowerCase().includes(keyword)) {
                isFoodQuery = true
                break
            }
        }

        if (isCountryQuery) {
            return `User Query: "${query}"\n\nResponse: *name of food*, *name of food*, *name of food*, *name of food*, *name of food*,[no external text]`
        } else if (isFoodQuery) {
            return `${context}\n\nUser Query: "${query}"\n\nResponse: x5 #name to restaurant#\n\n a short description\n *Adress:* **[adress to restaurant]**\n *Visit:* **[name of restaurant]**(url to restaurant)\n`
        } else {
            return `${context}\n\nUser Query: "${query}"\n\nResponse: You are a helpful assistant. Answer the user's question in a friendly and informative manner.`
        }
    }

    const fetchAgentResponse = async (query: string) => {
        setIsLoading(true)

        try {
            const context = messageList
                .map((message) => `${message.role}: ${message.content}`)
                .join("\n")
            const prompt = generatePrompt(context, query)

            const fetchPromise = axios.post(
                "https://localhost:7038/api/OpenAi/AskAiAssistant",
                {
                    question: prompt,
                    prompt: "",
                    token: 500,
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    withCredentials: true, // Ensure cookies are sent with the request
                },
            )

            // Delay promise
            const delayPromise = delay(2000)

            // Wait for both promises to resolve
            const [response] = await Promise.all([fetchPromise, delayPromise])

            if (response.status !== 200) {
                throw new Error("Network problem")
            }

            const data = response.data
            filterAgentResponse(data.response)
        } catch (error) {
            console.error("Something went wrong in fetch:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const filterAgentResponse = (message: string) => {
        // Split message into words
        const words = message.split(",")

        if (words.length === 5) {
            dispatch(
                updateMessageList({
                    type: "button",
                    role: "agent",
                    content: message,
                }),
            )
        } else {
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "agent",
                    content: message,
                }),
            )
        }
    }

    return (
        <main className="flex h-screen w-full flex-col items-center justify-between gap-4">
            <ChatHeading />
            <ChatLog>
                {messageList.map((message, index) =>
                    message.type === "button" ? (
                        <ButtonContainer
                            message={message}
                            handleFoodChoice={handleFoodChoice}
                            key={index}
                        />
                    ) : (
                        <ChatMessage
                            messageContent={message.content}
                            messageRole={message.role}
                            key={index}
                            messageType={message.type}
                        />
                    ),
                )}

                {showPreferenceButtons && (
                    <div className="flex w-11/12 flex-wrap justify-center gap-2">
                        {foodList
                            .filter((food) => food.selected === true)
                            .map((food, index) => (
                                <FoodPreferenceButtons
                                    key={index}
                                    onFoodChoice={handleFoodChoice}
                                    foodPreference={food.label}
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
