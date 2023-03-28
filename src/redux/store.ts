import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import profile from './slices/profileSlice';
import peoples from "./slices/peoplesSliece";
import dialogs from "./slices/dialogsSlice";
import messages from "./slices/messagesSlice";



export const store = configureStore({
    reducer: {
        profile,
        peoples,
        dialogs,
        messages,
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 