import { Button } from "../../ui/button"
import ReactMarkdown from "react-markdown"

type ChatButtonsProps = {
    onFoodChoice: (foodPreference: string) => void
    foodPreference: string
    onCloseButtonContainer: () => void
}

export default function FoodChatButtons({
    onFoodChoice,
    foodPreference,
    onCloseButtonContainer,
}: ChatButtonsProps) {
    const handleButtonClick = () => {
        onFoodChoice(foodPreference)
        onCloseButtonContainer()
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
