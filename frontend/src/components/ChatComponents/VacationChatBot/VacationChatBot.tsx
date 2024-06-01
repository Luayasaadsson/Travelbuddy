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

export default function VacationChatBot() {
    const dispatch = useDispatch()
    const location = useSelector(
        (state: RootState) => state.user.sessionInfo.city,
    )
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const vacationList = useSelector(
        (state: RootState) => state.user.preferences.vacation,
    )

    const handleChatButtonClick = (buttonChoice: string): void => {
        const destinationKeywords = vacationList.map((vacation) =>
            vacation.label.toLowerCase(),
        )
        let isDestinationQuery = destinationKeywords.some((keyword) =>
            buttonChoice.toLowerCase().includes(keyword),
        )
        let message

        if (isDestinationQuery) {
            message = `I'm interested in traveling for ${buttonChoice}`
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
                    content: `Great choice! Here are some things to keep in mind regarding this vacation: <br><strong>Attractions, Weather, Travel Tips</strong>`,
                }),
            )
        } else {
            message = `I want to explore ${buttonChoice.toLowerCase()}`
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
        const destinationKeywords = vacationList.map((vacation) =>
            vacation.label.toLowerCase(),
        )
        let isDestinationQuery = destinationKeywords.some((keyword) =>
            query.toLowerCase().includes(keyword),
        )

        if (isDestinationQuery) {
            return `User Query: "I am located in ${location} and interested in visiting ${query}"\n\nResponse: Provide details of <strong>top attractions</strong>, <strong>recommended travel period</strong>, and <strong>essential tips for visitors</strong>. Include no other text.`
        } else {
            return `${context}\n\nUser Query: "I want to travel from ${location} to ${query}, any advice?"\n\nResponse: Provide travel advice including best travel routes, recommended airlines, and any travel warnings. Include no additional text.`
        }
    }

    const fetchAgentResponse = async (query: string) => {
        setIsLoading(true)
        try {
            const context = messageList
                .map((message) => `${message.role}: ${message.content}`)
                .join("\n")
            const prompt = generatePrompt(context, query)
            const response = await axios.post(
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
        dispatch(
            updateMessageList({
                type: "text",
                role: "agent",
                content: message,
            }),
        )
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
                inputLabel="What's your next vacation destination?"
            />
        </main>
    )
}
