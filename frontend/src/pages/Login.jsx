import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config.js';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/authContext.jsx';
import HashLoader from 'react-spinners/HashLoader';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate('/home');

    } catch (err) {
      console.error('Login Error:', err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
          Hello! <span className="text-teal-600">Welcome</span> Back
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#04220a61] focus:outline-none focus:border-teal-600 text-[15px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
              aria-label="Enter Your Email"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#04220a61] focus:outline-none focus:border-teal-600 text-[15px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
              aria-label="Enter Your Password"
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-teal-800 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              name="login"
            >
              {loading ? <HashLoader size={25} color='#fff' /> : 'Login'}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account yet?
            <Link to='/register' className="text-teal-600 font-medium ml-1"> Register here</Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default Login;
