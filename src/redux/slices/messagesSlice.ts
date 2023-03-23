import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

axios.defaults.baseURL = 'http://localhost:4040/';
axios.defaults.withCredentials = true;

const config = {
    withCredentials: true,
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
    'profile/profileMe',
    async () => {
        const { data } = await axios.get("/profile", config)
        return data
    }
);

export const login = createAsyncThunk(
    'profile/login',
    async (params) => {
        const { username, password }: any = params;
        
        const { data }: any = await axios.post("/login", { username, password }, config);       
        return data
    }
);

export const registration = createAsyncThunk(
    'profile/registration',
    async (params) => {
        const { username, password }: any = params;

        const { data }: any = await axios.post("/register", { username, password }, config);
        return data
    }
);

export const exit = createAsyncThunk(
    'profile/exit',
    async () => {
        const { data }: any = axios.post("/logout", config);
        return data
    }
);

const initialState = {
    aboutMe: {},
    status: Status.LOADING,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(profileMe.pending, (state) => {
            state.status = Status.LOADING;
            state.aboutMe = {};
        });
        builder.addCase(profileMe.fulfilled, (state, action) => {
            state.aboutMe = {
                userId: action.payload.userId,
                username: action.payload.username,
                iat: action.payload.iat
            };
            state.status = Status.SUCCESS;
        });
        builder.addCase(profileMe.rejected, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });


        builder.addCase(login.pending, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.aboutMe = {
                userId: action.payload.userId,
                username: action.payload.username
            };
            state.status = Status.SUCCESS;
        });
        builder.addCase(login.rejected, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });


        builder.addCase(registration.pending, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });
        builder.addCase(registration.fulfilled, (state, action) => {
            state.aboutMe = {
                userId: action.payload.userId,
                username: action.payload.username
            };
            state.status = Status.SUCCESS;
        });
        builder.addCase(registration.rejected, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });

        builder.addCase(exit.pending, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });
        builder.addCase(exit.fulfilled, (state, action) => {
            state.aboutMe = {};
            state.status = Status.SUCCESS;
        });
        builder.addCase(exit.rejected, (state) => {
            state.status = Status.ERROR;
            state.aboutMe = {};
        });
    },
})

export const aboutMe = (state: RootState) => state.profile.aboutMe;
export const isLoading = (state: RootState) => state.profile.status;

export default profileSlice.reducer;