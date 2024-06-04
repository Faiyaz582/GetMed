import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/featuring.png';
import faqImg from '../assets/images/faq.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';




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

                </h1> {/*changes */}
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
                  Search for doctors according to your need.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />

              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font[600] text-center'>
                  Find a Location

                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Track the location of our hospital

                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />

              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font[600] text-center'>
                  Book Appointments Now

                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Book your appointment now matching your schedule.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px0 mx-auto flex items-center justify-center group hover:bg-cyan-600 hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            {/* <div className='py-[30px] px-5'>
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
        </div> */}
          </div>
        </div>
      </section>

      <About />

      {/*service section er kaaj: start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center font-bold'>Our Medical Services</h2>
            <p className='text_para text-center'>
             From advanced cancer treatments to compassionate mental health support, our expert team is dedicated to your well-being. 
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/*service section er kaaj: end */}

      {/*feature section:start*/}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*feature content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">2. Search for your physician here, and contact their office. </li>
                <li className="text_para">3.View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>


            {/*feature images*/}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-
              [100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                     font-[600] ">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor 
                    font-[400] ">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center 
                  bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text- 
                [8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    John Doe
                  </h4>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section >


      {/*feature section:end*/}
      {/*our great doctors: start here*/}
      <section>
        <div className='container'>
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center font-bold'>Our Great Doctors</h2>
            <p className='text_para text-center'>Our team of highly skilled doctors is dedicated to providing exceptional medical care, combining expertise with compassion to ensure the best outcomes for our patients.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/*our great doctors: ends here*/}

      {/*faq section:start*/}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>


            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most asked questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*faq section:end*/}

      {/**Testimoial secrion: start* */}

      <section>
        <div className='container'>
      <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center font-bold'>What our patients say</h2>
            <p className='text_para text-center'>
              Our team of highly skilled doctors is dedicated to providing exceptional medical care, combining expertise with compassion to ensure the best outcomes for our patients.
            </p>
          </div>

          <Testimonial /> 
          </div>
          
      </section>

       {/**Testimoial secrion: end* */}



    </>
  );
};

export default Home

//a change here just for a test!