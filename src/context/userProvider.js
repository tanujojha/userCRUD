import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";


const UserProvider = ({children})=>{
  
  const url = process.env.REACT_APP_MOCK_API;
  const navigate = useNavigate()

    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({});

    // GET ALL USERS
    const getAllUsers = async ()=>{
      try {
        const res = await fetch(`${url}/users`);
        const data = await res.json();
        // console.log(data);
        setUsers(data)
    
      } catch (error) {
        console.log(error);
      }
    }

    // GET A USER USING :ID
    const getSingleUser = async (id)=>{
      try {
        const res = await fetch(`${url}/users/${id}`);
        const data = await res.json();
        setSingleUser(data);
        res.status === 200 
        ? navigate(`/profile/${id}`) 
        : console.log("something went wrong while fetching single user");
        
      } catch (error) {
        console.log(error);
      }
    }

    // EDIT/UPDATE A USER
    const editProfile = async (details)=>{
      // console.log(details);
      try {
        const res = await fetch(`${url}/users/${details.id}`,{
          method: "PUT",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(details),
        });
        const data = await res.json();
        if(data){
          setSingleUser(data)
          navigate(`/profile/${details.id}`)
        }
        
      } catch (error) {
        console.log(error);
      }
    }

    // CREATE A USER
    const createUser = async (details)=>{
      let randImgNum = Math.floor(Math.random()*1000)
      details.image = `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${randImgNum}.jpg`;
      try {
        const res = await fetch(`${url}/users`,{
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(details),
        });
        const data = await res.json();
        // console.log(data);
        data ? navigate("/") : console.log("something went wrong while creating user");
        
      } catch (error) {
        console.log(error);
      }
    }

    // DELETE A USER
    const deleteUser = async (id)=>{
      try {
        const res = await fetch(`${url}/users/${id}`,{
          method: "DELETE",
        });
        // const data = await res.json();
        // console.log(data);
        res.status === 200 ? navigate("/") : console.log("something went wrong while deleting user");
        
      } catch (error) {
        console.log(error);
      }
    }



    return (
        <UserContext.Provider value={{getAllUsers, users, getSingleUser, singleUser, editProfile, createUser, deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;

