import React, { useContext } from 'react';
import "./profileCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';


function ProfileCard() {
  
  const navigate = useNavigate()
  const context = useContext(UserContext);
  const {singleUser, deleteUser} = context;


  const handleEdit = ()=>{
    navigate(`/edit/${singleUser.id}`)
  }

  const handleDelete = ()=>{
    deleteUser(singleUser.id);
  }

  return (
    <div className='profilecardmain'>
        <div className='topdiv'>
          <div className='profileimgdiv'>
            <img className='profilecardimg' src={singleUser.image} alt="..dummy image.."/>
          </div>
          <div className='nagdiv'>
            <h3 className='profileusername'>{singleUser.name}</h3>
            <div className='agdiv'>
              <h5 className='age'><span>Age:</span> {singleUser.age}</h5>
              <h5 className='gender'><span>Gender:</span> {singleUser.gender}</h5>
            </div>
          </div>
        </div>
        <div className='middiv'>
          <h5 className='email'><span>Email:</span> {singleUser.email}</h5>
          <h5 className='country'><span>Country:</span> {singleUser.country}</h5>
          <h6 className='createdat'>{singleUser.createdAt}</h6>
        </div>
        <div className='botdiv'>
          <EditIcon onClick={handleEdit} id='editicon'/>  
          <DeleteForeverIcon onClick={handleDelete} id='deleteicon'/>            
        </div>
    </div>
  )
}

export default ProfileCard