import Message from "@/types/chat/Message"
import ChatButton from "./ChatButtons"

type ButtonContainerProps = {
    message: Message
    handleChatButtonClick: (buttonChoice: string) => void
}

export default function ChatButtonsContainer({
    message,
    handleChatButtonClick,
}: ButtonContainerProps) {
    // Funktion för att omvandla kommaseparerad sträng till array
    function convertContentToArray(content: string): string[] {
        // Ta bort eventuella extra mellanslag och splita på kommatecken
        return content.replace(/\s*,\s*/g, ",").split(",")
    }

    return (
        <>
            <div className="flex w-11/12 flex-wrap justify-center gap-2">
                {Array.isArray(message.content)
                    ? message.content.map((item: string, index: number) => (
                          <ChatButton
                              key={index}
                              onButtonChoice={handleChatButtonClick}
                              foodPreference={item.trim()}
                          />
                      ))
                    : convertContentToArray(message.content).map(
                          (item: string, index: number) => (
                              <ChatButton
                                  key={index}
                                  onButtonChoice={handleChatButtonClick}
                                  foodPreference={item.trim()}
                              />
                          ),
                      )}
            </div>
        </>
    )
}
