import axios from "axios"
import { useEffect, useState } from "react"

const useFoodDetails=(id)=>{
    const [details,setDetails]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
       if(!id) return 
       const foodDetails=async()=>{
       try {
        const result =await axios.get(`http://localhost:3000/foodList/${id}`)
        setDetails(result.data)
       } catch (error) {
        console.log(error)
       }finally{
        setLoading(false)
       }
       }

       foodDetails()
    },[id])
return [details, loading];
}


export default useFoodDetails