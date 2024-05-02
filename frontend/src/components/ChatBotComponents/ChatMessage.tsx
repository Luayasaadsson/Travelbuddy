type ChatMessageProps = {
    messageContent: string
    messageRole: string
}

export default function ChatMessage({
    messageContent,
    messageRole,
}: ChatMessageProps) {
    return messageRole === "agent" ? (
        <p className="botPrompt">{messageContent}</p>
    ) : (
        <p className="userPrompt">{messageContent}</p>
    )
}
