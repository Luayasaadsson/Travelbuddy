import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

type ChatMessageProps = {
    messageContent: string | string[]
    messageRole: string
    messageType: string
}

const LinkRenderer = (props: any) => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    )
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

    const renderers = {
        link: LinkRenderer,
    }

    return messageRole === "agent" ? (
        messageType === "text" ||
        messageType === "link" ||
        messageType === "list" ? (
            <p className="botPrompt">
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={renderers}
                >
                    {content}
                </ReactMarkdown>
            </p>
        ) : null
    ) : (
        <p className="userPrompt">
            <ReactMarkdown>{content}</ReactMarkdown>
        </p>
    )
}
