import axios from "axios"


const useAddCart=()=>{
    const addCard=async(food)=>{
    try {
    const addCart=await axios.post("https://green-restaurant-server.vercel.app/postFood",food)
    return addCart.data 
  } catch (error) {
     console.log(error);   
    }
    }
 return  addCard
}

export default useAddCart