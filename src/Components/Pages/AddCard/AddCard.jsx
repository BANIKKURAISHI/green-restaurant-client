
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'
const AddCard= ({data,removeButton}) => {
  const {_id,name,category,price,cover_image,rating}=data

    return (
        <div>
        <div className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <img
        src={cover_image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="">
        
        <div className="flex flex-row justify-between mx-5 mt-3">
            <h2 className="text-lg font-semibold text-gray-800">
          {name}
        </h2>
            <button onClick={()=>removeButton(_id)} className="text-3xl  text-blue-600  rounded-xl mr-4 transition">
         <MdDeleteForever /> 
        </button>
        </div>
        {/* Name */}
        

        {/* Category */}
        <p className="text-sm text-gray-500 mx-5 ">
          {category}
        </p>

      
<div className="flex flex-row justify-between mb-6 mt-2 mx-5"> 
 {/* Price */}
        <p className="text-lg font-bold text-blue-600">
        Price : ${price}
        </p>
        <button className=" text-blue-500   transition">
          Buy Now
        </button>

       
        </div>
        
      </div>
    </div>
            
         
        </div>
    );
};

export default AddCard;





