
import { formateDate } from '../../utils/formateDate';


const DoctorAbout = () => {
  return <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About -
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Muhibur Rahman
          </span>
        </h3>
        <p className='text_para'>
          Dr. Muhibur Rahman, a surgeon at XYZ Hospital, holds a degree in minimally invasive surgery. He is known for his dedication to patient care and expertise in advanced surgical techniques.
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor'>{formateDate('9-12-2008')}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                MBBS
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              XYZ Medical College, Dhaka
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor'>{formateDate('2-25-2012')}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                FCPS in surgery
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              XYZ Hospital, Dhaka
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor'>{formateDate('4-14-2015')}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PhD in surgery
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Apollo Medical, New York
            </p>
          </li>
        </ul>
      </div>


      <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formateDate('4-14-2014')}-{formateDate('4-14-2024')}

                </span>
                <p className='text-[17px] leading-6 font-medium text-textColor'>
                    Sr.Surgeon

                </p>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  Apollo Medical, New York
                </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formateDate('4-14-2014')}-{formateDate('4-14-2024')}

                </span>
                <p className='text-[17px] leading-6 font-medium text-textColor'>
                    Sr.Surgeon

                </p>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  Apollo Medical, New York
                </p>
            </li>

        </ul>

      </div>
    </div>
}

export default DoctorAbout;
