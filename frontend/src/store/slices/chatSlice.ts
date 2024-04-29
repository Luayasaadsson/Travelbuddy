import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Chat from "@/types/chat/Chat"

const initialState: Chat = {
    id: null,
    userId: null,
    agentId: null,
    messages: [],
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
    },
})

export const { updateChatHeading, updateSubHeading } = chatSlice.actions

export default chatSlice.reducer
