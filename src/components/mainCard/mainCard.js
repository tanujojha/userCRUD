import React, { useContext } from 'react';
import "./mainCard.css";
import Button from '@mui/material/Button';
import { UserContext } from '../../context/userContext';

function MainCard({user}) {
 
  const context = useContext(UserContext);
  const {getSingleUser} = context;

  return (
    <div className='cardmain'>
        <div className='cardimgdiv'>
            <img className='cardimg' src={user.image} alt="..dummy image.."/>
        </div>
        <div className='cardbody'>
            <h5 className='username'>{user.name}</h5>
            <Button onClick={()=> getSingleUser(user.id)} className='viewprofilebtn' variant="outlined" color="primary" sx={{width: "100%"}}>View Profile</Button>
        </div>
    </div>
  )
}

export default MainCard