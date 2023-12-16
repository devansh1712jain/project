import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function FuntionalComponent(props) {
    const [id,setId] = useState(1);
    let [userdata,setUserdata] = useState({name:"yashjain"});
    
    console.log(props);
    const {msg} = props;
    const BASE_URL = "https://jsonplaceholder.typicode.com/users/";


    const getUserData = async() => {
        // console.log("componentDidMount");
        const {data} = await axios.get(BASE_URL + id);
        setUserdata(data);
    }
    useEffect(()=> {
        // returns only once behaves like component did mount
        console.log("componentDidMount");
        document.title = "learning React!";

        return (()=> {
            console.log("unmounted stage");
        })
        
    },[])

    useEffect(()=>{
        getUserData();
    },[id])

   

    const {name} = userdata;
  return (
    <React.Fragment>
            <h1>{msg}</h1>
            
            <input type="text" placeholder='Enter Name' onChange={e=>setId(e.target.value)}/>
             <h1>Hello {name},{id} </h1>
        </React.Fragment>
  )
}

export default FuntionalComponent