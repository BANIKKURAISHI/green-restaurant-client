import React from 'react';
import { useParams } from 'react-router';
import useFoodDetails from '../Hooks/UseDetails';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const FoodDetails = () => {
    
const { id } = useParams();
const [details, loading ] = useFoodDetails(id);

console.log("id:", id);
console.log("loading:", loading);
console.log("details:", details);




if (loading) return <p>Loading...</p>;
if (!details) return <p>No data found</p>;
console.log(details.images)
 const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

return (
  <div className='flex flex-row justify-between border-1 border-blue-700 text-blue-500'>
    <div className='w-[430px] mt-5'>
     <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper "
      >{
        details?.images?.map((img,index)=>(
       <SwiperSlide>
       <img className='w-96 h-[400px] mx-5 mt-4 mb-5 rounded-2xl' src={img} alt="" srcset="" />
       </SwiperSlide>
        ))
      }
    </Swiper>
</div>
<div className='mx-10'>

 <h2 className='font-bold text-3xl mt-3'>{details.name}</h2>
    <p className='font-md text-xl mt-2 text-red-600 mb-2'>{details.category}</p>
    <p className='text-justify'>{details.details}</p>
    <div>
        <p className='text-2xl font-semibold'>Element : </p>
        {
            details?.elements?.map((element,index)=><span className='text-md font-md mr-2' key={index}>
           {element}
            </span>)
        }
    </div>
    <div className='flex flex-row justify-between'>
    <div>
    <h1 className='text-xl text-red-400'>Region : {details.region}</h1>
     <h1 className='flex flex-row justify-around gap-1 text-amber-500 text-xl mt-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><span className='text-xl -mt-1'> {details.rating}</span></h1>
    <p className='text-justify'>Price: {details.price}</p>
    <p className='text-red-500'>{details.available_status==="true"?"<P>Available</P>":"Not Available"}</p>
    <div>
        
    </div>
    <button className="border-1 border-blue-700 text-blue-500 p-2 text-sm mt-2 mb-2  transition">
          Buy Now
        </button>
    
     </div>
     
     </div>
</div>
    
   
   
  </div>
);
};

export default FoodDetails;