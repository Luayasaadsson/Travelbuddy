import ReactMarkdown from "react-markdown"

type ChatMessageProps = {
    messageContent: string | string[]
    messageRole: string
    messageType: string
}

export default function ChatMessage({
    messageContent,
    messageRole,
    messageType,
}: ChatMessageProps) {
    // Konvertera array till en sträng
    const content =
        typeof messageContent === "string"
            ? messageContent
            : Array.isArray(messageContent)
              ? messageContent.join(" ")
              : ""

    console.log(content)

    return messageRole === "agent" ? (
        messageType === "text" ? (
            <p className="botPrompt">
                <ReactMarkdown>{content}</ReactMarkdown>
            </p>
        ) : messageType === "link" ? (
            <p className="botPrompt"><ReactMarkdown>{content}</ReactMarkdown></p>
        ) : messageType === "list" ? (
            <div className="botPrompt"><ReactMarkdown>{content}</ReactMarkdown></div>
        ) : null
    ) : (
        <p className="userPrompt"><ReactMarkdown>{content}</ReactMarkdown></p>
    )
}
