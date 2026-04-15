import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Rev from "./Rev";
const imgbb_api_key = "de5a538aa1f29550f2a393b095fdaa35";
const Review = () => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  // State: jekhane rating joma hobe
  const starsArray = [1, 2, 3, 4, 5];

  // !!! for image hosting imgbb
  const uploadImg = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;
    const res = await fetch(url, { method: "POST", body: formData });
    const data = await res.json();
    console.log(data);
    return data.data.display_url;
  };

  const handleReview = async (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    const name = e.target.name.value;
    const foodName = e.target.foodName.value;
    const email = e.target.email.value;
    const review = e.target.review.value;
    const userRating = rating;
    const imageFile = e.target.image.files[0];
    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadImg(imageFile);
    }

    const userFeedback = {
      name: name,
      email: email,
      feedback: review,
      rating: userRating,
      foodName: foodName,
      image: imageUrl,
      time: currentTime,
    };
    console.log(userFeedback);

    // ******* review post is start mongodb  *****//////
    try {
      const reviewPost = await axios({
        method: "post",
        url: "http://localhost:3000/feedback",
        data: userFeedback,
      });
      if (reviewPost) {
        alert("sucessfully done ");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Something went wrong!");
    }
    // ******* review post is end mongodb *****//////
  };

  // ******* review get is ready *******//////////
  useEffect(() => {
    const getReviews = async () => {
      try {
        const result = await axios.get("http://localhost:3000/feedback");
        setReviews(result.data);
        
      } catch (error) {
        // console.log(error);
      }
    };
    getReviews();
  }, []);

  return (
    <div className="flex flex-row bg-blue-300 p-10 justify-between">
      <div className=" w-2/3  rounded-2xl ">
        <Rev  reviews={reviews} setReviews={setReviews}></Rev>
      </div>
      <div className=" border-1 bg-white text-black border-blue-400 rounded-2xl ml-5 mr-20 mb-5">
        <h1 className="text-blue-600  font-medium text-2xl text-center">"We value your feedback. <br /> Share your experience and help us grow!"</h1>
        <form onSubmit={handleReview} className="flex p-1 flex-col justify-center ml-6 mb-5   gap-2">
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

          <input className="border-1 border-blue-300 text-white text-2xl  bg-blue-500 p-1 mt-1 rounded-md  w-96" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Review;
