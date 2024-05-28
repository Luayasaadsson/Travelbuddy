import ChatLoader from "./ChatLoader"
import axios from "axios"
import ChatHeading from "./ChatHeading"
import ChatLog from "./ChatLog"
import FoodPreferenceButtons from "./FoodPreferenceButtons"
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"
import ButtonContainer from "./ButtonContainer"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { updateMessageList } from "@/store/slices/chatSlice"

export default function ChatBot() {
    const dispatch = useDispatch()
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const foodList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const [showPreferenceButtons, setShowPreferenceButtons] =
        useState(true)

    //Delay som avgör hur länge ChatLoader ska visas
    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    const handleFoodChoice = (buttonChoice: string): void => {
        setShowPreferenceButtons(false)

        dispatch(
            updateMessageList({
                type: "text",
                role: "user",
                content: [`I'm hungry for some ${buttonChoice} food`],
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
                content: [inputQuery],
            }),
        )
        setInputQuery("")
        fetchAgentResponse(inputQuery)
    }


    const fetchAgentResponse = async (query: string) => {
        setIsLoading(true)

        try {
            const context = messageList
                .map((message) => message.content)
                .join("\n")
            const fullQuery = `${context}\n${query}`

            const fetchPromise = axios.post(
                "https://localhost:7038/api/OpenAi/AskAiAssistant",
                {
                    question: fullQuery,
                    prompt: "",
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    withCredentials: true, // This line ensures cookies are sent with the request
                },
            )

            // Delay promise
            const delayPromise = delay(2000)

            // Wait for both promises to resolve
            const [response] = await Promise.all([fetchPromise, delayPromise])

            if (response.status !== 200) {
                throw new Error("Nätverksproblem")
            }

            const data = response.data
            /* filterAgentResponse(data.response) */
            dispatch(
                updateMessageList({
                    type: "text",
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
                {/* <ChatLoader /> */}
            </ChatLog>
            <ChatInput
                handleInputSubmit={handleInputSubmit}
                inputQuery={inputQuery}
                setInputQuery={setInputQuery}
            />
        </main>
    )
}
