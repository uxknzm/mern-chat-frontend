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

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const { data } = await axios.get("/users", config);
        return data
    }
);

export const findUser = createAsyncThunk(
    "users/findUser",
    async (params) => {
        const query = params;
        const { data } = await axios.get(`/user/find?query=${query}`);
        return data
    }
)

const initialState = {
    users: [],
    status: "",
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = Status.ERROR;
        });


        builder.addCase(findUser.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(findUser.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(findUser.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
})

export const getUsers = (state: RootState) => state.users;

export default usersSlice.reducer;