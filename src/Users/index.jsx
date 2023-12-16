import React, { useEffect, useState} from 'react'
import axios from 'axios'
import User from './user';
import { Container, Row } from 'react-bootstrap';
import {useSearchParams} from 'react-router-dom'

// https://dummyapi.io/data/v1/user?page=1&limit=10
// 657738570e610eed7ed0d0b1

function Users() {
    const [users, setUser] = useState([]);    // declare user state
    const [searchname] = useSearchParams();
    const instance = axios.create({
        baseURL: "https://dummyapi.io/data/v1/user?page=1&limit=10",
        headers: { "app-id":"657738570e610eed7ed0d0b1"}
    })

    useEffect(() => {
      
        (async()=>{
            const {data} = (await instance.get()).data;
            console.log(data);
            setUser(data);
        })();
    
      
    }, [])
    
    function filtereduser(user){
        const search = searchname.get('name') ? searchname.get('name').toLowerCase() : '';
        return user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search);
    }
    

    return (
        <Container fluid>
            <Row>
                {users.filter(filtereduser).map(user=> <User user={user} key={user.id}/>)}
            </Row>
        </Container>
    )
}

export default Users


    // firstName: "Valentin"
    // id: "60d0fe4f5311236168a109d4"
    // lastName: "Ortega"
    // picture: "https://randomuser.me/api/portraits/med/men/3.jpg"
    // title: "mr"