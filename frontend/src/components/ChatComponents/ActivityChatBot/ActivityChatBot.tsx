import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { updateMessageList } from "@/store/slices/chatSlice"
import ChatLoader from "../ChatLoader"
import ChatHeading from "../ChatHeading"
import ChatLog from "../ChatLog"
import ChatInput from "../ChatInput"
import ChatMessage from "../ChatMessage"
import ChatButtonsContainer from "../ChatButtonsContainer"

export default function ActivityChatBot() {
    const dispatch = useDispatch()
    const location = useSelector(
        (state: RootState) => state.user.profile.address.city,
    )
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const activityList = useSelector(
        (state: RootState) => state.user.preferences.activities,
    )

    const handleChatButtonClick = (buttonChoice: string): void => {
        const activityKeywords = activityList.map((activity) =>
            activity.label.toLowerCase(),
        )
        let isActivityQuery = false
        for (const keyword of activityKeywords) {
            if (buttonChoice.toLowerCase().includes(keyword.toLowerCase())) {
                isActivityQuery = true
                break
            }
        }
        let message

        if (isActivityQuery) {
            message = `I'm interested in ${buttonChoice} activities`
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
                    content:
                        "Great! What kind of activities are you looking for?",
                }),
            )
        } else {
            message = `I'm curious about ${buttonChoice}`
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "user",
                    content: message,
                }),
            )
        }

        fetchAgentResponse(message)
    }

    const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
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
        const activityKeywords = activityList.map((activity) =>
            activity.label.toLowerCase(),
        )
     /*    const activityPhrases = [
            "interested in",
            "curious about",
            "explore",
            "find",
        ] */

        let isActivityQuery = false

        for (const keyword of activityKeywords) {
            if (query.toLowerCase().includes(keyword.toLowerCase())) {
                isActivityQuery = true
                break
            }
        }

        if (isActivityQuery) {
            console.log("Choosing activity prompt")

            return `User Query: "I am located in ${location} and interested in ${query}"\n\nResponse: Provide details of exactly five activities related to "${query}". Include no additional text.`
        } else {
            console.log("Choosing general prompt")

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
        const words = message.split(",").map((word) => word.trim())

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
                        <ChatButtonsContainer
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
                {isLoading && <ChatLoader />}
            </ChatLog>
            <ChatInput
                handleInputSubmit={handleInputSubmit}
                inputQuery={inputQuery}
                setInputQuery={setInputQuery}
                inputLabel="What are you curious about?"
            />
        </main>
    )
}
