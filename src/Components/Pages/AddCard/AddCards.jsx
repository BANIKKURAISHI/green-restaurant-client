
import { useLoaderData } from "react-router";
import AddCard from "./AddCard";
import { useState } from "react";
import axios from "axios";



const AddCards= () => {
const datum=useLoaderData()   
const [add,setAdd]=useState(datum) 
const removeButton=async(id)=>{
      try {
      const result = await axios.delete(`http://localhost:3000/postFood/${id}`);
   
      if (result.data.deletedCount > 0) {
        setAdd(prev => prev.filter(item => item._id !== id));
        
      } else {
        console.log("Item not found or already deleted");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
    


}

    return (
        <div>
         <div className="grid grid-cols-2 gap-5 mb-10 mx-5">
            {
                add.map(data=><AddCard  removeButton={removeButton} key={data._id} data={data}></AddCard>)
            }
        </div>   
        </div>
    );
};

export default AddCards;