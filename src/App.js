import React from 'react';
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Cursor from './Cursor/cursor';
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <React.Fragment>
      <Cursor />
      <Home />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
