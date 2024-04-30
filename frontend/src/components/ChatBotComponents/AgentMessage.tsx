type AgentMessageProps = {
    messageContent: string
}
export default function AgentMessage({ messageContent }: AgentMessageProps) {
    return <p className="botPrompt">{messageContent}</p>
}
