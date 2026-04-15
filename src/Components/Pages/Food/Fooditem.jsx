import React from 'react';
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from 'react-router';
import useAddCart from '../Hooks/useAddCard';
// import Swal from 'sweetalert2'



const Fooditem = ({food}) => {
  const addFood=useAddCart()
    const {_id,name,category,price,cover_image,rating}=food
    const handleAddFood=async(food)=>{
      const result=await addFood(food)
 
      console.log(result)
    }
    return (
        <div>
          <div className="card  text-blue-500 border-1 shadow-xl border-blue-600 bg-base-100 w-80 h-96 ">
  <figure className='p-5 mt-5 rounded-2xl' >
    <img
      src={cover_image}
      className='w-full h-60 '
      alt="food logo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">
        <h1 className=' '>{name}</h1>
    </h2>
    <div className="text-md min-w-[100px]">{category}</div>
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row gap-1.5 text-xl "> Price: {price} <span className='text-xl text-amber-500 mt-1'><AiFillDollarCircle /></span></div>
      <div className="flex flex-row gap-1 text-xl"> <span className='flex-1 text-xl text-amber-500 mt-1'><MdOutlineStarPurple500 />  </span>{rating}</div>
    </div>
    <div className="flex flex-row justify-between ">
   <Link to={`/foodList/${_id}`}>  <button className='btn border-b-blue-600 text-blue-500'>Details</button></Link> 
     <button onClick={()=>handleAddFood(food)} className='btn border-b-blue-600 text-blue-500'>Add cart</button>
    </div>
  </div>
</div> 
           
        </div>
    );
};

export default Fooditem;