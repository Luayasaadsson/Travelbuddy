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

export default function AccommodationChatBot() {
    const dispatch = useDispatch()
    const location = useSelector(
        (state: RootState) => state.user.profile.address.city,
    )
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const accommodationList = useSelector(
        (state: RootState) => state.user.preferences.accomodation,
    )

    const handleChatButtonClick = (buttonChoice: string): void => {
        const accommodationKeywords = accommodationList.map((accommodation) =>
            accommodation.label.toLowerCase(),
        )
        let isAccommodationQuery = accommodationKeywords.some((keyword) =>
            buttonChoice.toLowerCase().includes(keyword),
        )
        let message

        if (isAccommodationQuery) {
            message = `I'm interested in staying at a ${buttonChoice}`
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
                    content: "Okay! What type of accommodation are you after?",
                }),
            )
        } else {
            message = `I want to explore ${buttonChoice.toLowerCase()} accommodations`
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
        const accommodationKeywords = accommodationList.map((accommodation) =>
            accommodation.label.toLowerCase(),
        )
        const accommodationKeywordsPhrases = [
            "want",
            "I want to explore",
            "explore",
            "for",
            "like",
        ]

        let isAccommodationQuery = false
        let isKeywordQuery = false

        for (const keyword of accommodationKeywords) {
            if (query.toLowerCase().includes(keyword.toLowerCase())) {
                isAccommodationQuery = true
                break
            }
        }

        for (const keyword of accommodationKeywordsPhrases) {
            if (query.toLowerCase().includes(keyword.toLowerCase())) {
                isKeywordQuery = true
                break
            }
        }

        if (isAccommodationQuery) {
            console.log("väljer prompt 1")

            return `User Query: "I am located in ${location} and interested in ${query}"\n\nResponse: Respond only with a list containing exactly five types of accommodations. Write the accommodation types in a row, separated by commas. Include no other text.`
        } else if (isKeywordQuery) {
            console.log("väljer prompt 2")

            return `${context}\n\nUser Query: "I am located in ${location} and ${query}"\n\nResponse: Provide details of exactly six accommodations at my location. For each accommodation, include the following format: \n\n**Name of the Accommodation**\nA short description\n**Google maps:** <a href="https://www.google.com/maps/search/name+of+the+accommodation+mylocation/" target="_blank">Name</a>\n**Visit website:** <a href="The real URL to the accommodation's website that's linked to the accommodation in google maps" target="_blank">Name</a>\n\nInclude no additional text.`
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
                inputLabel="What type of accommodation are you looking for?"
            />
        </main>
    )
}