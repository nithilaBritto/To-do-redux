import React from "react";
import axios from "axios";
const useFetch=(url)=>{
    const [user,setUsers]=React.useState('')
    const [pending,setPending]=React.useState(true)
    const [error,setError]=React.useState(null)
    let randomNum=Math.floor(Math.random()*30)
    const fetchUrl=async()=>{
        try{
            const response=await axios.get(url)
            setUsers(response.data[randomNum].firstname)
            setPending(false)
            setError(null)
        }
        catch(err){
            setError(err.message)
        }
        }
    React.useEffect(()=>{
        fetchUrl()
    },[url])
    return [user,pending,error]
    }
export default useFetch