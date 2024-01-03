import AddUser from "./components/Users/AddUser";
import './App.css';

function App() {

  const pullUserData = (userData) => (
  console.log(userData)     
  )
console.log(localStorage );
  return (
    <div className="bg-gray-600 h-[100vh] justify-center text-center text-cyan-400 pt-[10vh]">
      <AddUser userInputData ={pullUserData}/>
    </div>
  );
}

export default App;
