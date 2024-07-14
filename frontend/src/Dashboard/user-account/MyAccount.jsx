

import {useContext,useState} from 'react'
import {AuthContext} from './../../context/authContext'
import userImg from '../../assets/images/doctor-img01.png'
import MyBookings from './MyBookings';
import Profile from './Profile';
import useGetProfile from '../../hooks/useFeychData'
import { BASE_URL } from '../../config';

const MyAccount = () => {

    const {dispatch} = useContext(AuthContext);
    const [tab,setTab] = useState('bookings');
    const {data:userData,loading,error} = useGetProfile(`${BASE_URL}/users/profile/me`);
    console.log(userData,'userdata');

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
    };
  return <div>
    <section>
    <div className='grid md:grid-cols-3 gap-10'>
        <div className='pb-[50px] px-[30px] rounded-md'>
            <div className='flex items-center justify-center'>
                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                    <img src={userImg} alt="" className='w-full h-full rounded-full' />
                </figure>

            </div>

            <div className='text-center mt-4'>
                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
                    Faiyaz

                </h3>
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                    example@gmail.com
                    </p>
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                    Blood type:
                    <span className='ml-2 text-headingColor text-[22px] leading-9'>
                        B+

                    </span>
                </p>

            </div>
            <div className='mt-[50px] md:mt-[100px]'>
                <button onClick={handleLogout}
                 className='w-full bg-teal-800 p-3 text-[16px] leading-7 rounded-md text-white  hover:bg-teal-400 transition-[300] '>Logout</button>
                <button className='w-full bg-teal-950 p-3 text-[16px] mt-4 leading-7 rounded-md text-white hover:bg-red-700 transition-[300]'>Delete Account</button>


            </div>

        </div>

        <div className='md:col-span-2 md:px-[30px]'>
            <div>
            <button onClick={()=>setTab('bookings')}  className={`${tab=='bookings' && 'bg-teal-800 text-white font-normal'} py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid`}>
                My Bookings
            </button>
            <button onClick={()=>setTab('settings')}  className={`${tab=='settings' && 'bg-teal-800 text-white font-normal'} py-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid`}>
                Profile Settings
            </button>
            </div>

            {
            tab=='bookings' && <MyBookings/>
        }
        {
            tab=='settings' && <Profile/>
        }
        </div>


    </div>
    </section>





  </div>

  
};

export default MyAccount