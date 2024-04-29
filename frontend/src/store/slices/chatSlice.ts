import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Chat from "@/types/chat/Chat"
import Message from "@/types/chat/Message" 

/* type Message = {
    id: string;
    content: string;
} */

/* type Chat = {
    id: string | null;
    userId: string | null;
    agentId: string | null;
    messageList: Message[]; // Define Message type as an interface
    heading: string;
    subHeading: string;
} */

const initialState: Chat = {
    id: null,
    userId: null,
    agentId: null,
    messageList: [], // Ensure id is typed as a string
    heading: "",
    subHeading: "",
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChatHeading: (state, action: PayloadAction<string>) => {
            state.heading = action.payload;
        },
        updateSubHeading: (state, action: PayloadAction<string>) => {
            state.subHeading = action.payload;
        },
        updateMessageList: (state, action: PayloadAction<Message>) => {
            state.messageList = [...state.messageList, action.payload];
        },
    },
});


/* const initialState: Chat = {
    id: null,
    userId: null,
    agentId: null,
    messageList: [{id: "1", content: "aaaa"}],
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
            state.messageList = [...state.messageList, action.payload];
        },
}}) */

export const { updateChatHeading, updateSubHeading, updateMessageList } = chatSlice.actions

export default chatSlice.reducer
