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

export const fetchPeoples = createAsyncThunk(
    'people/fetchPeoples',
    async () => {
        const { data }: any = await axios.get('/people', config);
        return data
    }
);

const initialState = {
    peoples: [],
    onlinePeoples: {},
    offlinePeoples: {}
};

const peoplesSliece = createSlice({
    name: 'peoples',
    initialState,
    reducers: {
        setOnlinePeople(state, action) {
            action.payload.forEach(({ userId, username }: any) => {
                // @ts-ignore
                state.onlinePeoples[userId] = username;
            });
        },
        setOfflinePeople(state, action) {
            const { onlinePeoples, userId, allUser } = action.payload;
            
            if (onlinePeoples && userId && allUser) {
                
                const offlinePeopleArr = allUser
                    .filter((p: any) => p._id !== userId)
                    .filter((p: any) => !Object.keys(onlinePeoples).includes(p._id));
                offlinePeopleArr.forEach((p: any) => {
                    // @ts-ignore
                    state.offlinePeoples[p._id] = p;
                });
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPeoples.pending, (state) => {
            state.peoples = [];
        });
        builder.addCase(fetchPeoples.fulfilled, (state, action) => {
            state.peoples = action.payload;
        });
        builder.addCase(fetchPeoples.rejected, (state) => {
            state.peoples = [];
        });
    },
})

export const peoples = (state: RootState) => state.peoples
export const peoplesNotMe = (id: number) => (state: RootState) => state.peoples.peoples.filter((obj) => {    
    //@ts-ignore
    return obj._id !== id;
});

export const { setOnlinePeople, setOfflinePeople } = peoplesSliece.actions;

export default peoplesSliece.reducer;