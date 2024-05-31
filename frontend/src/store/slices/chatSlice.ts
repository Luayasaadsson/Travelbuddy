import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Chat from "@/types/chat/Chat"
import Message from "@/types/chat/Message"

const initialState: Chat = {
    id: null,
    userId: null,
    //agentId: null,
    messageList: JSON.parse(localStorage.getItem("messageList") || "[]"), // Load from localStorage if available, otherwise empty array
    heading: "",
    subHeading: "",
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChatHeading: (state, action: PayloadAction<string>) => {
            state.heading = action.payload
        },
        updateSubHeading: (state, action: PayloadAction<string>) => {
            state.subHeading = action.payload
        },
        updateMessageList: (state, action: PayloadAction<Message>) => {
            // Add the new message to the message list
            state.messageList.push(action.payload);

            // Filter out 'button' type messages that are not the last message
            state.messageList = state.messageList.filter((message, index, array) => {
                return message.type !== 'button' || index === array.length - 1;
            });

            // Save the updated message list to localStorage
            localStorage.setItem("messageList", JSON.stringify(state.messageList));
        },
        clearMessageList: (state) => {
            state.messageList = []
            localStorage.removeItem("messageList")
        },
    },
})

export const {
    updateChatHeading,
    updateSubHeading,
    updateMessageList,
    clearMessageList,
} = chatSlice.actions

export default chatSlice.reducer
