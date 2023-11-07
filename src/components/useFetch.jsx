import React from "react";
import axios from "axios";
const useFetch=(url)=>{
    const [user,setUsers]=React.useState('')
    let randomNum=Math.floor(Math.random()*30)
    const fetchUrl=async()=>{
        try{
            const response=await axios.get(url)
            setUsers(response.data[randomNum].firstname)
        }
        catch(err){
            console.log(err.message)
        }
        }
    React.useEffect(()=>{
        fetchUrl()
    },[url])
    return [user]
    }
export default useFetch