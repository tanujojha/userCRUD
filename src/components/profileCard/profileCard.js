import React from 'react';
import "./profileCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function ProfileCard() {

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
    <div className='profilecardmain'>
        <div className='topdiv'>
          <div className='profileimgdiv'>
            <img className='profilecardimg' src={data.image} alt="..dummy image.."/>
          </div>
          <div className='nagdiv'>
            <h3 className='profileusername'>{data.name}</h3>
            <div className='agdiv'>
              <h5 className='age'><span>Age:</span> {data.age}</h5>
              <h5 className='gender'><span>Gender:</span> {data.gender}</h5>
            </div>
          </div>
        </div>
        <div className='middiv'>
          <h5 className='email'><span>Email:</span> {data.email}</h5>
          <h5 className='country'><span>Country:</span> {data.country}</h5>
          <h6 className='createdat'>{data.createdAt}</h6>
        </div>
        <div className='botdiv'>
          <EditIcon id='editicon'/>  
          <DeleteForeverIcon id='deleteicon'/>            
        </div>
    </div>
  )
}

export default ProfileCard