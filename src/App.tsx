import React, { useEffect } from 'react';

import { useAppDispatch } from './redux/store';
import AppRouter from './routes/Routes';
import { profileMe } from './redux/slices/profileSlice';

import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileMe());
  }, []);

  return <AppRouter />
}

export default App;
