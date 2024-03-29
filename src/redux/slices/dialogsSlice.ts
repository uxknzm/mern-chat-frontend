import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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

export const removeDialog = createAsyncThunk(
    'dialog/removeDialog',
    async (params) => {
        const id = params;
        const { data } = await axios.delete(`/dialogs/${id}`, config);
        
        return { ...data, id }
    }
);

const initialState = {
    dialogs: [],
    status: "",
    currentDialogId: null,
    selectedPartherId: null
};

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        updateReadedStatusDialog(state, action) {          
            state.dialogs = state.dialogs.map((dialog) => {                
                //@ts-ignore
                if (dialog._id === action.payload) {                          
                    //@ts-ignore
                  dialog.lastMessage.read = true;
                };
                return dialog;
              });
        },
        setCurrentDialogId(state, action) {
            const id = action.payload;
            socket.emit('DIALOGS:JOIN', id);
            state.currentDialogId = id;
        },
        setSelectedPartherId(state, action) {
            const id = action.payload;
            state.selectedPartherId = id;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDialogs.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchDialogs.fulfilled, (state, action) => {
            state.dialogs = action.payload;
            state.status = "success"
        });
        builder.addCase(fetchDialogs.rejected, (state) => {
            state.status = "error"
        });

        builder.addCase(removeDialog.pending, (state) => {
        });
        builder.addCase(removeDialog.fulfilled, (state, action) => {
            //@ts-ignore
            state.dialogs = state.dialogs.filter((dialog) => dialog._id !== action.payload.id);
        });
        builder.addCase(removeDialog.rejected, (state) => {
        });
    },
})

export const items = (state: RootState) => state.dialogs.dialogs;
//@ts-ignore
export const getLastMessageisRead = (state: RootState) => state.dialogs?.dialogs.filter((dialog) => !dialog.lastMessage.read).length;
export const getCurrentDialogId = (state: RootState) => state.dialogs.currentDialogId;
export const getCurrentDialog = (state: RootState) => find(state.dialogs.dialogs, { _id: state.dialogs.currentDialogId });
export const getSelectedPartherId = (state: RootState) => state.dialogs.selectedPartherId;
export const getStatus = (state: RootState) => state.dialogs.status;
export const { updateReadedStatusDialog, setCurrentDialogId, setSelectedPartherId } = dialogSlice.actions;

export default dialogSlice.reducer;