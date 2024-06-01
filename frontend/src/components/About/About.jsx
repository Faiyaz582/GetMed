import React from 'react'; 
import  aboutImg from "../../assets/images/about.png.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';


const About = () => {
    return <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/*about image*/}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt="" />
                    </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className='heading'> Proud to be one of the best in the nation</h2>
                        <p className='text_para'>Delivering exceptional healthcare solutions, our hospital stands 
                        as a beacon of excellence in the nation, committed to patient-centric care and medical innovation.</p>

                        <p className='text_para mt-[30px]'>At the forefront of medical innovation, our hospital boasts top-tier
                         doctors, cutting-edge treatments, and a commitment to patient-centric care. Leading the nation 
                        in healthcare excellence, we're dedicated to your well-being.</p>

                        <Link to="/">
                            <button  className="btn">Learn More</button>
                        </Link>
                    </div>
                </div>
                </div>
        </section>
};

export default About;


// import React from 'react' 6.9k (gzipped: 2.7k)

// const About = () => {
//     return {
//         <div> About </div>
//     }
// }

// export default About