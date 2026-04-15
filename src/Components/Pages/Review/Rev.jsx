import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router";

const Rev = ({ reviews,setReviews }) => {
//   const { name, email, feedback, foodName, rating, image, time } = review;

const deleteReviewButton=async(id)=>{


  try {
  console.log(id)
  const result =await axios.delete(`http://localhost:3000/feedback/${id}`)
  if(result.data.deletedCount >0){
    const remaining=reviews.filter(rev=>rev._id !== id)
    setReviews(remaining)
  }
  console.log(result.data)
    
  } catch (error) {
    
  }
 
}
const UpdateButton=(id)=>{

  console.log(id)
}





  return (
   <div className="w-[800px] h-[510px] mx-auto border border-blue-400 shadow-lg rounded-xl overflow-hidden">
    <h1 className="text-blue-500 bg-white p-5 font-medium text-2xl text-center">"What Our Customers Say – Real Feedback from Real People"</h1>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  h-full" 
      >
        
        {reviews?.map((singleReview) => (
          <SwiperSlide key={singleReview._id}>
            <div className="p-8 flex flex-col items-center justify-center h-full text-center bg-white">
              <img 
                src={singleReview.image} 
                className="w-40 h-40 rounded-full object-cover -mt-10  mb-4 border-2 border-green-500" 
                alt={singleReview.name} 
              />
              <p className="text-gray-600 italic mb-4">{singleReview.feedback}</p>
              <div className="space-y-1">
                <h2 className="text-xl font-bold  text-gray-800">{singleReview.name}</h2>
                <p className="text-sm mt-1 text-gray-500">{singleReview.email}</p>
                <p className="text-yellow-500 mt-1 font-semibold">Rating: {singleReview.rating} ★</p>
                <p className="text-green-600 mt-1 font-medium">Food: {singleReview.foodName}</p>
                <small className="text-gray-400 block mt-2">
                  {new Date(singleReview.time).toLocaleDateString()}
                </small>
                <div className="flex flex-row justify-center  mb-10">
            <Link to={`update/${singleReview._id}`}><div className="text-3xl text-blue-500 mr-4 flex flex-row">
               <FaRegEdit />
                </div></Link>    
                <div onClick={()=>deleteReviewButton(singleReview._id)} className="text-4xl text-blue-500 flex flex-row">
                <MdDeleteForever />
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};

export default Rev;
