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
import FoodButtonContainer from "./FoodButtonContainer"

export default function FoodChatBot() {
    const dispatch = useDispatch()
    const location = useSelector(
        (state: RootState) => state.user.sessionInfo.city,
    )
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const foodList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const [showPreferenceButtons, setShowPreferenceButtons] = useState(true)

    const handleChatButtonClick = (buttonChoice: string): void => {
        const countryKeywords = foodList.map((food) => food.label.toLowerCase())
        let isCountryQuery = false
        for (const keyword of countryKeywords) {
            if (buttonChoice.toLowerCase().includes(keyword.toLowerCase())) {
                isCountryQuery = true
                break
            }
        }
        let message

        if (isCountryQuery) {
            message = `I'm down to eat some ${buttonChoice} food`
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "user",
                    content: message,
                }),
            )
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "agent",
                    content: "Okay! What type of food are you after?",
                }),
            )
        } else {
            message = `I crave ${buttonChoice.toLowerCase()}`
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "user",
                    content: `I crave ${buttonChoice.toLowerCase()}`,
                }),
            )
        }

        setShowPreferenceButtons(false)

        fetchAgentResponse(message)
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
        fetchAgentResponse(inputQuery)
        setInputQuery("")
    }

    const generatePrompt = (context: string, query: string): string => {
        const countryKeywords = foodList.map((food) => food.label.toLowerCase())
        const foodKeywords = ["want", "I crave", "crave", "for", "like"]

        let isFoodQuery = false
        let isCountryQuery = false

        for (const keyword of countryKeywords) {
            if (query.toLowerCase().includes(keyword.toLowerCase())) {
                isCountryQuery = true
                break
            }
        }

        for (const keyword of foodKeywords) {
            if (query.toLowerCase().includes(keyword.toLowerCase())) {
                isFoodQuery = true
                break
            }
        }

        if (isCountryQuery) {
            console.log("väljer prompt 1")

            return `User Query: "I am located in ${location} and ${query}"\n\nResponse: Respond only with a list containing exactly five types of food. Write the food types in a row, separated by commas. Include no other text.`
        } else if (isFoodQuery) {
            console.log("väler prompt 2")

            return `${context}\n\nUser Query: "I am located in ${location} and ${query}"\n\nResponse: Provide details of exactly four restaurants. For each restaurant, include the following format: \n\n**Name of the Restaurant**\nA short description\n*Address:* **[Name of the Address](https://www.google.com/maps/search/name+of+the+restaurant+mylocation/)**\n*Visit:* **[Name of the Restaurant](URL to restaurant's website)**\n\nInclude no additional text.`
        } else {
            console.log("väljer prompt 3")

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
            console.log(prompt)

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
                    withCredentials: true,
                },
            )
            const [response] = await Promise.all([fetchPromise])

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
                        <FoodButtonContainer
                            message={message}
                            handleChatButtonClick={handleChatButtonClick}
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
                {/* visar preferenser på matland */}
                {showPreferenceButtons && (
                    <div className="flex w-11/12 flex-wrap justify-center gap-2">
                        {foodList
                            .filter((food) => food.selected === true)
                            .map((food, index) => (
                                <FoodPreferenceButtons
                                    key={index}
                                    onFoodChoice={handleChatButtonClick}
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
