import { Button } from "../../ui/button"
import ReactMarkdown from "react-markdown"

type ChatButtonsProps = {
    onFoodChoice: (foodPreference: string) => void
    foodPreference: string
    onCloseButtonContainer: () => void
}

export default function ChatButtons({
    onFoodChoice,
    foodPreference,
    onCloseButtonContainer,
}: ChatButtonsProps) {
    return (
        <Button
            variant="greenOutline"
            size="prompt"
            onClick={() => {
                onFoodChoice(`I crave ${foodPreference}`)
                onCloseButtonContainer()
            }}
        >
            <ReactMarkdown>{foodPreference}</ReactMarkdown>
        </Button>
    )
}
