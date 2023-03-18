import React from 'react';
import "./createPage.css"
import CreateForm from '../../components/createForm/createForm';

function CreatePage() {
  return (
    <div className='creatediv'>
        <h2 className='createhead'>Create Profile</h2>
        <CreateForm/>
    </div>
  )
}

export default CreatePage