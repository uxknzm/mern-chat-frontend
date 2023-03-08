import axios from 'axios';
import React from 'react';
import './App.css';
import AppRouter from './routes/Routes';

function App() {
  axios.defaults.baseURL = 'https://mern-chat-backend-production-118e.up.railway.app/';
  return <AppRouter />
}

export default App;
