import React from 'react';
import "./editForm.css";
import Button from '@mui/material/Button';

function EditForm() {

    const data = {
        "name": "Ms. Donald Jaskolski",
        "age": 33,
        "email": "Leopold_Wyman@example.net",
        "country": "Lao People's Democratic Republic",
        "gender": "male",
        "image": "https://loremflickr.com/640/480",
        "createdAt": "2086-11-26T21:54:07.753Z",
        "id": "1"
      };


  return (
    <div className='formdiv'>
        <form>
            
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input value={data.name} type="text" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input value={data.email} type="email" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                    <input value={data.age} type="text" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                    <input value={data.gender} type="text" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Country</label>
                <div className="col-sm-10">
                    <input value={data.country} type="text" className="form-control" id="inputEmail3"/>
                </div>
            </div>

            <Button type='submit' className='submitbtn' variant="contained" color="primary" sx={{width: "40%"}}>submit</Button>

        </form>

    </div>
  )
}

export default EditForm