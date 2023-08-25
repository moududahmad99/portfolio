import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Cursor from './Cursor/cursor';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from './Spinner/Index';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? <LoadingSpinner /> : <Home /> }
      <Cursor />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
