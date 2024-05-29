import { useState } from "react"
import Message from "@/types/chat/Message"
import FoodChatButtons from "./FoodChatButtons"

type ButtonContainerProps = {
    message: Message
    handleChatButtonClick: (buttonChoice: string) => void
}

export default function FoodButtonContainer({
    message,
    handleChatButtonClick,
}: ButtonContainerProps) {
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
                              <FoodChatButtons
                                  key={index}
                                  onFoodChoice={handleChatButtonClick}
                                  foodPreference={item.trim()}
                                  onCloseButtonContainer={
                                      handleCloseButtonContainer
                                  }
                              />
                          ))
                        : convertContentToArray(message.content).map(
                              (item: string, index: number) => (
                                  <FoodChatButtons
                                      key={index}
                                      onFoodChoice={handleChatButtonClick}
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
