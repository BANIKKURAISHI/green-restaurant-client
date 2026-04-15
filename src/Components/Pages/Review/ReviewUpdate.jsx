import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

const ReviewUpdate = () => {
     const starsArray = [1, 2, 3, 4, 5];
     const [rating, setRating] = useState(0);

     const updateRev=(e)=>{
      e.preventDefault()
        const currentTime = new Date().toISOString();
    const name = e.target.name.value;
    const foodName = e.target.foodName.value;
    const email = e.target.email.value;
    const review = e.target.review.value;
    const userRating = rating;
     const userFeedback = {
      name: name,
      email: email,
      feedback: review,
      rating: userRating,
      foodName: foodName,
      
      time: currentTime,
    };
    console.log(userFeedback);
     }
    return (
        <div>
           

           <div className=" border-1 bg-white  text-black border-blue-400 rounded-2xl ml-5 mr-20 mb-5">
                   <h1 className="text-blue-600  font-medium text-2xl text-center">"We value your feedback. <br /> Share your experience and help us grow!"</h1>
                   <form onSubmit={updateRev} className="flex  p-1 flex-col justify-center ml-6 mb-5   gap-2">
                     {/* !food name */}
                     <input
                       className="border-1 border-blue-300 p-1 mt-1 rounded-md  w-96"
                       type="text"
                       name="foodName"
                       id=""
                       placeholder="Enter your Food name"
                     />
           
                     {/* Star count  */}
                     <div>
                       <label className="font-semibold text-blue-600 text-2xl mr-3">
                         Give a Rating :
                       </label>
           
                       {starsArray.map((num) => (
                         <button type="button" key={num} onClick={() => setRating(num)}>
                           {num <= rating ? (
                             <IoStar className="text-yellow-400 text-2xl mt-2" />
                           ) : (
                             <IoStarOutline className="text-gray-300 text-2xl mt-2" />
                           )}
                         </button>
                       ))}
                     </div>
           
                     {/* ! customer name */}
                     <input
                       className="border-1 border-blue-300 p-1 mt-1 rounded-md  w-96"
                       type="text"
                       name="name"
                       id=""
                       placeholder="Enter your name"
                     />
           
                     <input
                       className="border-1 border-blue-300 p-1 mt-1 rounded-md  w-96"
                       type="email"
                       name="email"
                       id=""
                       placeholder="Enter your email"
                     />
                     {/* Food Image Upload */}
                     <div className="flex flex-col gap-1">
                       <label className="font-semibold text-blue-600">
                         Upload Food Photo:
                       </label>
                       <input
                         className="border-1 border-blue-300 p-1 mt-1 rounded-md  w-96 p-1 text-sm text-gray-500 
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-300
                          hover:file:bg-blue-200 cursor-pointer"
                         type="file"
                         name="image" // Form submit-er somoy dhorar jonno
                         accept="image/*" // Sudhu image file select korar sujog dibe
                       />
                     </div>
                     <textarea
                       name="review"
                       className="border-1 border-blue-300 p-1 mt-1 rounded-md  w-96"
                       id=""
                       placeholder="Write your feedback here....."
                     ></textarea>
           
                     <input className="border-1 border-blue-300 text-white text-2xl  bg-blue-500 p-1 mt-1 rounded-md  w-96" type="submit" value="Update" />
                   </form>
                 </div>
        
        </div>
    );
};

export default ReviewUpdate;