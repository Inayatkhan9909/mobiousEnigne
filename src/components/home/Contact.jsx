import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <section>
        <div className='w-[80%] m-auto bg-primary text-custom-white p-6 py-16 rounded-rounded-corners flex justify-between items-center'>
            <h3 className='text-h3 text-wrap'>STILL have doubts?</h3>
            <h1 className='text-[50px] w-full text-center'>Contact us</h1>
             <span className='text-h3 bg-custom-white w-14 h-14 p-3 rounded-full text-primary hover:bg-secondary hover:text-custom-white'><FaArrowRightLong/></span>
        </div>
    </section>
  )
}

export default Contact