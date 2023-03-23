import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import profile from './slices/profileSlice';
import peoples from "./slices/peoplesSliece"



export const store = configureStore({
    reducer: {
        profile,
        peoples,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 