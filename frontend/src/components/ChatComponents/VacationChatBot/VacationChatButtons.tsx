import { Button } from "../../ui/button"
import ReactMarkdown from "react-markdown"

type VacationChatButtonsProps = {
    onFoodChoice: (foodPreference: string) => void
    foodPreference: string
    onCloseButtonContainer: () => void
}

export default function VacationChatButtons({
    onFoodChoice,
    foodPreference,
    onCloseButtonContainer,
}: VacationChatButtonsProps) {
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
