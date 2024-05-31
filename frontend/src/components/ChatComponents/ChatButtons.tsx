import { Button } from "../ui/button"
import ReactMarkdown from "react-markdown"

type ChatButtonsProps = {
    onButtonChoice: (foodPreference: string) => void
    foodPreference: string
}

export default function ChatButton({
    onButtonChoice,
    foodPreference,
}: ChatButtonsProps) {
    const handleButtonClick = () => {
        onButtonChoice(foodPreference)
    }
    return (
        <Button
            variant="greenOutline"
            size="prompt"
            onClick={handleButtonClick}
        >
            <ReactMarkdown>{foodPreference}</ReactMarkdown>
        </Button>
    )
}
