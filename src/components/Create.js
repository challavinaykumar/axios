import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Create = () => {


    const[firstName,SetFirstName] = useState();
    const[lastName,SetLastName] = useState();


    console.log(firstName)
    console.log(lastName)


    const sendDatatoAPI = (e) => {    
        e.preventDefault();
        axios.post('https://64058a85eed195a99f854949.mockapi.io/crud',{
            firstName,
            lastName,
            
        })
       
    }


    return (
        <div>
           <form>
            <input type='text' name='fname' onChange={(e) => SetFirstName(e.target.value)} placeholder='FirstName'/>
            <br/>
            <input type='text' name='lname' onChange={(e) => SetLastName(e.target.value)} placeholder='LastName'/>
            <br/>
            <Link to='/read'><button type='submit' onClick={sendDatatoAPI}>Submit</button></Link>

            </form> 
        </div>
    );
};

export default Create;