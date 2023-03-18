import React from 'react';
import EditForm from '../../components/editForm/editForm';
import "./editPage.css"

function EditPage() {
  return (
    <div className='editdiv'>
        <h2 className='edithead'>Edit Profile</h2>
        <EditForm/>
    </div>
  )
}

export default EditPage