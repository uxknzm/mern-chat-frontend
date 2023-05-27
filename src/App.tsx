import React, { useEffect } from 'react';

import { useAppDispatch } from './redux/store';
import AppRouter from './routes/Routes';
import { profileMe } from './redux/slices/profileSlice';

import "./styles/IdeClone.css";
import "./styles/SampleSplitter.css";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileMe());
  }, []);

  return (
      <AppRouter />
  )
}

export default App;
