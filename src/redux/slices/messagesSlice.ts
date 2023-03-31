import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../core/axios";
import { RootState } from "../store";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const fetchMessages = createAsyncThunk(
    'message/fetchMessages',
    async (params) => {        
        const dialodId = params;
        console.log(dialodId);
        
        const { data } = await axios.get(`/messages?dialog=${dialodId}`, config)
        return data
    }
);

export const fetchSendMessage = createAsyncThunk(
    'message/fetchSendMessage',
    async (params) => {        
        const { text, dialogId, attachments = [] }: any = params;
        const { data } = await axios.post("/messages", {
            text: text,
            dialog_id: dialogId,
            attachments
          }, config)
        return data
    }
);

const initialState = {
    messages: [],
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state, action) {
            const { data: message, currentDialogId } = action.payload;            
            if (currentDialogId === message.dialog._id) {
                //@ts-ignore
                state.messages.push(message);
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.messages = action.payload;
        });
        builder.addCase(fetchMessages.rejected, (state) => {
        });
    },
})

export const getMessages = (state: RootState) => state.messages.messages;
export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;