import axios from "axios"


const useAddCart=()=>{
    const addCard=async(food)=>{
    try {
    const addCart=await axios.post("http://localhost:3000/postFood",food)
    return addCart.data 
  } catch (error) {
     console.log(error);   
    }
    }
 return  addCard
}

export default useAddCart