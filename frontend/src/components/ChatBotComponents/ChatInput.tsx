import { Label } from "../ui/label"
import { Input } from "../ui/input"
type ChatInputProps = {
    handleInputSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    inputQuery: string
    setInputQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function ChatInput({
    handleInputSubmit,
    inputQuery,
    setInputQuery,
}: ChatInputProps) {
    return (
        <div className="mb-8 w-11/12 max-w-96">
            <form onSubmit={handleInputSubmit}>
                <Label>Whats your cravings?</Label>
                <Input
                    value={inputQuery}
                    placeholder="Enter Your Cravings"
                    onChange={(e) => setInputQuery(e.target.value)}
                />
            </form>
        </div>
    )
}
