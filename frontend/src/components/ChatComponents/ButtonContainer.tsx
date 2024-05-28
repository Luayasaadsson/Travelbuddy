import { useState } from "react"
import Message from "@/types/chat/Message"
import ChatButtons from "./VacationChatBot/ChatButtons"

type ButtonContainerProps = {
    message: Message
    handleFoodChoice: (buttonChoice: string) => void
}

function ButtonContainer({ message, handleFoodChoice }: ButtonContainerProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    function handleCloseButtonContainer() {
        setIsOpen(false)
    }

    // Funktion för att omvandla kommaseparerad sträng till array
    function convertContentToArray(content: string): string[] {
        // Ta bort eventuella extra mellanslag och splita på kommatecken
        return content.replace(/\s*,\s*/g, ",").split(",")
    }

    return (
        <>
            {isOpen && (
                <div className="flex w-11/12 flex-wrap justify-center gap-2">
                    {Array.isArray(message.content)
                        ? message.content.map((item: string, index: number) => (
                              <ChatButtons
                                  key={index}
                                  onFoodChoice={handleFoodChoice}
                                  foodPreference={item.trim()}
                                  onCloseButtonContainer={
                                      handleCloseButtonContainer
                                  }
                              />
                          ))
                        : convertContentToArray(message.content).map(
                              (item: string, index: number) => (
                                  <ChatButtons
                                      key={index}
                                      onFoodChoice={handleFoodChoice}
                                      foodPreference={item.trim()}
                                      onCloseButtonContainer={
                                          handleCloseButtonContainer
                                      }
                                  />
                              ),
                          )}
                </div>
            )}
        </>
    )
}

export default ButtonContainer
