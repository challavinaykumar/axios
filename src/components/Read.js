// import Axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const[data,setData] = useState([])

useEffect(() => {
    axios.get('https://64058a85eed195a99f854949.mockapi.io/crud')
    .then((getData) => setData(getData.data))
},[])

const settheData = (id, firstName, lastName) => {
    console.log(id,firstName, lastName)
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
}

const getData = () => {
    axios.get(`https://64058a85eed195a99f854949.mockapi.io/crud`)
        .then((getData) => {
            setData(getData.data);
        })
}

const onDelete = (id) => {
    axios.delete(`https://64058a85eed195a99f854949.mockapi.io/crud/${id}`)
    .then(() => {
        getData();
    })
        
}
    return (
        <div>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {data.map((data) => {
                    return (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.id}</Table.Cell>    
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>
                                <Link to='/update'>
                                    <Button
                                        color="green"
                                        onClick={() => settheData(data.id, data.firstName, data.lastName)}>
                                        Update
                                    </Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                    <Button style={{"background-color":"red","color":"white"}} onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                        </Table.Row>
                    )
                })}

            </Table.Body>
        </Table>
    </div>
    );
};

export default Read;