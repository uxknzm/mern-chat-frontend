import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { find } from "lodash";
import axios from "../../core/axios";
import socket from "../../core/socet";
import { RootState } from "../store";


const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const fetchDialogs = createAsyncThunk(
    'dialog/fetchDialogs',
    async () => {
        const { data } = await axios.get("/dialogs", config);
        
        return data
    }
);
const initialState = {
    dialogs: [],
    currentDialogId: null
};

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        updateReadedStatus(state, action) {
            state.dialogs = state.dialogs.map((dialog) => {
                //@ts-ignore
                if (dialog._id === action.payload.dialogId) {
                    //@ts-ignore
                  dialog.lastMessage.readed = true;
                };
                return dialog;
              });
        },
        setCurrentDialogId(state, action) {
            const id = action.payload;
            socket.emit('DIALOGS:JOIN', id);
            state.currentDialogId = id;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDialogs.pending, (state) => {
        });
        builder.addCase(fetchDialogs.fulfilled, (state, action) => {
            state.dialogs = action.payload;
        });
        builder.addCase(fetchDialogs.rejected, (state) => {
        });
    },
})

export const items = (state: RootState) => state.dialogs.dialogs;
export const getCurrentDialogId = (state: RootState) => state.dialogs.currentDialogId;
export const getCurrentDialog = (state: RootState) => find(state.dialogs.dialogs, { _id: state.dialogs.currentDialogId })
export const { updateReadedStatus, setCurrentDialogId } = dialogSlice.actions;

export default dialogSlice.reducer;