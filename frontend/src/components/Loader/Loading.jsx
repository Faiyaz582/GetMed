import React from 'react'
import {HashLoader} from 'react-spinners';

const Loading = () => {
  return( 
  <div className='flex items-center justify-center w-full h-full'>
    <HashLoader color='#008080'/>
  </div>
  );
}

export default Loading;