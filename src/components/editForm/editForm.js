import React, { useContext } from 'react';
import "./editForm.css";
import Button from '@mui/material/Button';
import { UserContext } from '../../context/userContext';
import { useFormik } from 'formik';

function EditForm() {

    const context = useContext(UserContext);
    const {singleUser, editProfile} = context;

    const formik = useFormik({
        initialValues: {
            id: singleUser.id,
            name: singleUser.name,
            email: singleUser.email,
            age: singleUser.age,
            gender: singleUser.gender,
            country: singleUser.country
        },
        onSubmit: (values)=>{
            editProfile(values)
        }
    })


  return (
    <div className='formdiv'>
        <form onSubmit={formik.handleSubmit}>
            
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.name} type="text" className="form-control" id="name"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.age} type="text" className="form-control" id="age"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.gender} type="text" className="form-control" id="gender"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.country} type="text" className="form-control" id="country"/>
                </div>
            </div>

            <Button type='submit' className='submitbtn' variant="contained" color="primary" sx={{width: "40%"}}>submit</Button>

        </form>

    </div>
  )
}

export default EditForm