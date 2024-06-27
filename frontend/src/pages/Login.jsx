
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
          Hello! <span className="text-teal-600">Welcome</span> Back
        </h3>


        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#04220a61] focus:outline-non
              focus: border-teal-600 text-[15px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md curson-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#04220a61] focus:outline-non
              focus: border-teal-600 text-[15px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md curson-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-teal-800 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account yet?
             <Link to='/register' className="text-teal-600 font-medium ml-1"> Register here</Link>
            </p>

        </form>
      </div >
    </section >
  );
};

export default Login;