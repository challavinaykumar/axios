import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Update = () => {

    const[firstName,SetFirstName] = useState('');
    const[lastName,SetLastName] = useState('');
    const[ID,SetID] = useState(null);




    const sendDatatoAPI = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-template-curly-in-string
        axios.put(`https://64058a85eed195a99f854949.mockapi.io/crud/${ID}`,{
            firstName,
            lastName,
            
        })
    }


    useEffect(()=> {
        SetFirstName(localStorage.getItem('firstName'));
        SetLastName(localStorage.getItem('lastName'));
        SetID(localStorage.getItem('ID'))

    },[])


    return (
        <div>
           <form>
            <input type='text' name='fname' value={firstName} onChange={(e) => SetFirstName(e.target.value)} placeholder='FirstName'></input>
            <br/>
            <input type='text' name='lname' value={lastName} onChange={(e) => SetLastName(e.target.value)} placeholder='LastName'></input>
            <br/>
            <button type='submit' onClick={sendDatatoAPI}>Update</button>

            </form> 
        </div>
    );
};

export default Update;