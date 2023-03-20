import './App.css';
import React, {useState} from 'react';
import Login from './form/Login';
import Register from './form/Register';
import Forgot from './form/Forgot';

function App() {

  const [page, setPage]= useState("login")

  const chosePage = () => {
    if (page === "login") {
      return <Login setPage={setPage} />;
    }
    if (page === "forgot") {
      return <Forgot setPage={setPage} />;
    }
    if (page === "register") {
      return <Register setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-purple-800 flex justify-center items-center">
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        {chosePage()}
      </div>
    </div>
  );
}

export default App;
