import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../core/axios";
import { RootState } from "../store";

const config = {
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const fetchMessages = createAsyncThunk(
    'message/fetchMessages',
    async (params) => {
        const { dialodId }: any = params;
        const { data } = await axios.get(`/messages?dialog=${dialodId}`, config)
        return data
    }
);

// export const addMessage = createAsyncThunk(
//     'message/fetchMessages',
//     (params, thunkAPI) => {
//         const { message }: any = params;
//         //@ts-ignore
//         const { dialogs }: RootState = thunkAPI.getState();
//         const { currentDialogId } = dialogs;
//         if (currentDialogId === message.dialog._id) {
//             return message;
//         };        
//     }
// );


const initialState = {
    messages: [],
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        // addMessage(state, action) {
        //     const message = action.payload;
        //     const { dialogs } = getState();
        //     const { currentDialogId } = dialogs;
        //     if (currentDialogId === message.dialog._id) {
        //         //@ts-ignore
        //         state.messages = [...state.messages, message]
        //     };
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.messages = [];
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.messages = action.payload;
        });
        builder.addCase(fetchMessages.rejected, (state) => {
            state.messages = [];
        });

        // builder.addCase(addMessage.pending, (state) => {
        //     state.messages = [];
        // });
        // builder.addCase(addMessage.fulfilled, (state, action) => {
        //     state.messages = action.payload;
        // });
        // builder.addCase(addMessage.rejected, (state) => {
        //     state.messages = [];
        // });
    },
})

export const getMessages = (state: RootState) => state.messages.messages;
// export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;