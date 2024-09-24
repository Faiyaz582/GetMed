import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';
import { BASE_URL} from '../../config';
import useFeychData from '../../hooks/useFeychData';
import Loader from '../../components/Loader/Loading.jsx'
import Error from '../../components/Error/Error.jsx';
import { useEffect, useState } from 'react';

const Doctors = () => {
  const [query,setQuery] = useState('')
  const [debounceQuery,setDebounceQuery] = useState('')

  const handleSearch=()=>{
    setQuery(query.trim())
    console.log('handle search')
  }

  useEffect(()=>{

    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700)

    return ()=> clearTimeout(timeout)

  },[])
  const {data:doctors,loading ,error} = useFeychData(`${BASE_URL}/doctors?query=${query}`)
  return (
    <>
      <section className='bg-[rgb(208,244,251)] py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='heading mb-6'>
            Find a Doctor
          </h2>
          <div className='max-w-[570px] mx-auto mb-6 bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input 
              type="search" 
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' 
              placeholder="Search doctor by name or specification "
              value={query}
              onChange={e=>setQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-r-md rounded-[0px] bg-cyan-700' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">

        {loading && <Loader/>}
        {error && <Error/>}
        {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5' >
             {doctors.map((doctor)=> (
               <DoctorCard key={doctor.id} doctor={doctor}/>
            ))}
          </div>}
        </div>
      </section>
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
    </>
  );
}

export default Doctors;
