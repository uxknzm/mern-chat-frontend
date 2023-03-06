import axios from 'axios';
import React from 'react';
import './App.css';
import AppRouter from './routes/Routes';

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  return <AppRouter />
}

export default App;
