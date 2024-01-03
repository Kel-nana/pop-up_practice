import React, {useState} from 'react';
import Card from '../UI/Card'

const AddUser = props => {
  const[userInput, setUserInput] = useState({
    userName: "",
    userAge: "",
  })
 props.userInputData(userInput);
  // console.log(userInput)
  const addUserHandler = event => {
    event.preventDefault();
    if (userInput.userName.trim().length === 0 || userInput.userAge.trim().length === 0) {
      return;
    }

    if(+userInput.userAge < 1){
      return;
    }

    setUserInput({
      userName: "",
      userAge: "",
    });
  }

  const userNameChangeHandler = event => {
    setUserInput((prevState)=> {
    return {...prevState, userName: event.target.value}
})
  }
  
  const ageChangeHandler = event => {
    setUserInput((prevState)=> {
    return {...prevState, userAge: event.target.value}
    })
      }

    return(
        <Card>
        <form onSubmit={addUserHandler} className='flex flex-col shadow-2xl shadow-cyan-400 w-[35vw] h-[80vh] ml-[9%] border-cyan-400 border-2 pt-[12vh] pb-[12vh] rounded-3xl'>
            <label htmlFor='user_name' className='mr-[64.5%] mb-[2.5vh]'>Username :</label>
            <input id="user_name" placeholder='Enter Username' type="text" className='w-[28vw] py-[0.5rem] px-[0.4rem] bg-neutral-400 border-cyan-200 border-2 rounded-[8px] ml-[10%] mb-[5vh] shadow-inner-xl text-slate-800 font-semibold' onChange={userNameChangeHandler} value={userInput.userName}></input>
            <label htmlFor='age' className='mr-[73%] mb-[2.5vh]'>Age :</label>
            <input id="age" type="number" className='w-[28vw] py-[0.5rem] px-[0.4rem] bg-neutral-400 border-cyan-200 border-2 rounded-[8px] ml-[10%] mb-[5vh] shadow-inner-xl shadow-cyan-500 text-slate-800 font-semibold' onChange={ageChangeHandler} value={userInput.userAge}></input>
            <button className='mt-[10vh]' type= "submit">Add User</button>
        </form>
        </Card>
    )
};

export default AddUser;