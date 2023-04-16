import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../core/axios";
import { RootState } from "../store";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
};

export const fetchUserAbout = createAsyncThunk(
    'people/fetchUserAbout',
    async (params) => {
        const id = params;
        const { data }: any = await axios.get(`/user/${id}`, config);
        return data
    }
);

const initialState = {
    aboutProfile: {},
    status: "",
};

const aboutUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserAbout.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(fetchUserAbout.fulfilled, (state, action) => {
            state.aboutProfile = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchUserAbout.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
})

export const aboutUser = (state: RootState) => state.user.aboutProfile;
export const getStatus = (state: RootState) => state.user.status;

// export const { setOnlinePeople, setOfflinePeople } = peoplesSliece.actions;

export default aboutUserSlice.reducer;