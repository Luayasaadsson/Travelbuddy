

type Chat = {
    id: string 
    userId: string | null
    agentId: string | null
    messages: Message[] | null
}

export default Chat