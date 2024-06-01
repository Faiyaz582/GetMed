import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import icon01 from '../assets/images/icon01.png'
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'

const Home = () => {
  return (
  <>
  <section className='hero_section pt=[60px] 2xl: h=[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>
              WE HELP PATIENTS TO LIVE A HEALTHY LIFE

            </h1>
            <p className='text_para '>
 
               Our medical appointment webpage enhances your life by offering a seamless healthcare experience. Easily schedule appointments with top-rated doctors, access detailed provider profiles, and receive reminders to stay on top of your health. We're committed to making healthcare accessible and improving community well-being.
            </p>

            <button className="btn">Request an Appoinment</button>


          </div>
          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className='text-[30px] leading-[56px] lg:text-[54px] font-[500] text-headingColor'>
                30+
              </h2>
             <span className='w-[80px] h-2 bg-yellowColor rounded-full block mt-[14px]'></span>
             <p className='text_para pt-2'>Years of Experience</p>
            </div>

            <div>
             <h2 className='text-[30px] leading-[56px] lg:text-[54px] font-[500] text-headingColor'>
               15+
             </h2>
             <span className='w-[80px] h-2 bg-purpleColor rounded-full block mt-[14px]'></span>
             <p className='text_para'>Clinic Location</p>
            </div>

            <div>
             <h2 className='text-[30px] leading-[56px] lg:text-[54px] font-[500] text-headingColor'>
               100%
             </h2>
             <span className='w-[80px] h-2 bg-irisBlueColor rounded-full block mt-[14px]'></span>
             <p className='text_para'>Patient Satisfaction</p>
            </div>
        </div>



        </div>


        <div className='flex gap-[30px] justify-end'>
          <div>
            <img src={heroImg01} alt="" />
          </div>
          <div className='mt-[30px]'>
            <img src={heroImg02} alt="" />
          </div>

        </div>


      </div>
    </div>


  </section>
  <section>
    <div className='container'>
      <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-center'>
          Trying to provide the Best Medical services
        </h2>
        <p className='text_para text-center'>
          Top-Class care for everyone. Our services are unmatched and offers expert health care.
        </p>

      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt[55px]'>
        <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center'>
           <img src={icon01} alt="" />

         </div>
         <div className='mt-[30px]'>
           <h2 className='text-[26px] leading-9 text-headingColor font[600] text-center'>
             Find a Doctor

           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            World-class care for evryone. Our health system offer unmatched expert health care.
           </p>
           <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
           </Link>

         </div>
        </div>
        <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center'>
           <img src={icon01} alt="" />

         </div>
         <div className='mt-[30px]'>
           <h2 className='text-[26px] leading-9 text-headingColor font[600] text-center'>
             Find a Doctor

           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            World-class care for evryone. Our health system offer unmatched expert health care.
           </p>
           <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
           </Link>

         </div>
        </div>
        <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center'>
           <img src={icon01} alt="" />

         </div>
         <div className='mt-[30px]'>
           <h2 className='text-[26px] leading-9 text-headingColor font[600] text-center'>
             Find a Doctor

           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            World-class care for evryone. Our health system offer unmatched expert health care.
           </p>
           <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
           </Link>

         </div>
        </div>
        <div className='py-[30px] px-5'>
         <div className='flex items-center justify-center'>
           <img src={icon01} alt="" />

         </div>
         <div className='mt-[30px]'>
           <h2 className='text-[26px] leading-9 text-headingColor font[600] text-center'>
             Find a Doctor

           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            World-class care for evryone. Our health system offer unmatched expert health care.
           </p>
           <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
           </Link>

         </div>
        </div>
      </div>
    </div>
  </section>

  </>
  );
};

export default Home