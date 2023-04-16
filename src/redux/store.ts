import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import profile from './slices/profileSlice';
import user from "./slices/aboutUserSlice";
import dialogs from "./slices/dialogsSlice";
import messages from "./slices/messagesSlice";



export const store = configureStore({
    reducer: {
        profile,
        user,
        dialogs,
        messages,
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 