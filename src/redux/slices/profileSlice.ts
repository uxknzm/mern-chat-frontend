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

export const profileMe = createAsyncThunk(
    '/user/me',
    async () => {
        const { data } = await axios.get("/user/me", config)
        return data
    }
);

export const login = createAsyncThunk(
    'profile/login',
    async (params) => {
        const { email, password }: any = params;

        const { data }: any = await axios.post("/user/signin", { email, password }, config);
        return data
    }
);

export const registration = createAsyncThunk(
    'profile/registration',
    async (params) => {
        const { email, password, fullname }: any = params;

        const { data }: any = await axios.post("/user/signup", { fullname, email, password }, config);
        return data
    }
);

const initialState = {
    aboutMe: {},
    status: "",
    token: window.localStorage.token,
    isAuth: !!window.localStorage.token
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        exit(state) {
            state.aboutMe = {};
            state.token = "";
            window.localStorage.removeItem("token");
            state.isAuth = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(profileMe.pending, (state) => {
            state.status = Status.LOADING;
            state.isAuth = false;
        });
        builder.addCase(profileMe.fulfilled, (state, action) => {
            state.aboutMe = action.payload;
            state.isAuth = true;
            state.status = Status.SUCCESS;
        });
        builder.addCase(profileMe.rejected, (state) => {
            state.status = Status.ERROR;
            state.isAuth = false;
        });


        builder.addCase(login.pending, (state) => {
            state.status = Status.LOADING;
            state.isAuth = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            window.localStorage['token'] = action.payload.token;
            state.token = action.payload.token;
            state.isAuth = true;
            state.status = Status.SUCCESS;
        });
        builder.addCase(login.rejected, (state, action) => {          
            state.status = Status.ERROR;
            state.isAuth = false;
        });


        builder.addCase(registration.pending, (state) => {
            state.status = Status.LOADING;
            state.aboutMe = {};
        });
        builder.addCase(registration.fulfilled, (state, action) => {
            state.aboutMe = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(registration.rejected, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });
    },
})

export const aboutMe = (state: RootState) => state.profile.aboutMe;
export const isAuth = (state: RootState) => state.profile.isAuth;
export const token = (state: RootState) => state.profile.token;
export const isLoading = (state: RootState) => state.profile.status;

export const { exit } = profileSlice.actions

export default profileSlice.reducer;