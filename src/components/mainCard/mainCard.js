import React from 'react';
import "./mainCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function MainCard() {

  const data = {
    "name": "Ms. Donald Jaskolski",
    "age": 33,
    "email": "Leopold_Wyman@example.net",
    "country": "Lao People's Democratic Republic",
    "gender": "male",
    "image": "https://loremflickr.com/640/480",
    "createdAt": "2086-11-26T21:54:07.753Z",
    "id": "1"
   }

  return (
    <div className='cardmain'>
        <div className='cardimgdiv'>
            <img className='cardimg' src={data.image} alt="..dummy image.."/>
        </div>
        <div className='cardbody'>
            <h4 className='username'>{data.name}</h4>
            <div className='iconsdiv'>
              <EditIcon className='editicon'/>  
              <DeleteForeverIcon className='deleteicon'/>            
            </div>
            <Button className='viewprofilebtn' variant="outlined" color="primary" sx={{width: "100%"}}>View Profile</Button>
        </div>
    </div>
  )
}

export default MainCard