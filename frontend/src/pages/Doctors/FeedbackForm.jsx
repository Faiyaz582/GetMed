import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleSubmitReview = async e=>{
    e.preventDefault()
  }

  return (
    <form action="">
      <div>
        <h3 className='text-headingColor text-[18px] leading-6 font-semibold mb-4 mt-0'>
          How will you rate the overall experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type='button'
                className={`text-[22px] cursor-pointer ${
                  index <= (hover || rating)
                    ? 'text-yellowColor'
                    : 'text-gray-400'
                }`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onClick={() => setRating(index)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='mt-30px'>
      <h3 className='text-headingColor text-[18px] leading-9 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions.
        </h3>

        <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md ' id=""  rows="5" placeholder='Write your feedback here' onChange={(e)=>setReviewText(e.target.value)}></textarea>


      </div>
      <button type="submit" onClick={handleSubmitReview} className='btn'>
        Submit Feedback

      </button>
    </form>
  );
};

export default FeedbackForm;