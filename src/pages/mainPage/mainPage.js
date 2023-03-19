import MainCard from '../../components/mainCard/mainCard';
import React, { useContext, useEffect } from 'react';
import "./mainPage.css";
import { UserContext } from '../../context/userContext';

function MainPage() {

  const context = useContext(UserContext);
  const {users, getAllUsers} = context;

  useEffect(()=>{
    getAllUsers();
  }, [])
  
  return (
    <div className='maindiv'>
      
      {users.map((user)=><MainCard key={user.id} user={user}/>)}
      
    </div>
  )
}

export default MainPage