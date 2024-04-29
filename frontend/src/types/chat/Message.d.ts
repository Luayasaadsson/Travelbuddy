

type Message = {
    id: string
    dateTime: Date
    previousMessageId: string
    role: Role 
    senderId: string
    receiverId: string
    content: string

}

export default Message