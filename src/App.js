import React, { useState, useEffect } from 'react';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Userlist/UserList";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const pullUserData = (userData) => {
    console.log(userData, 'pullUserData')
    
    setItems(userData)
  }

    // Store userData in localStorage
  useEffect(() =>{
    localStorage.setItem('userData', JSON.stringify(items));
  },[items])
 
console.log(localStorage );
  return (
    <div className="bg-gray-600 h-[100vh] justify-center text-center text-cyan-400 pt-[10vh]">
      <AddUser userInputData ={pullUserData}/>
      <UserList/>
    </div>
  );
}

export default App;
