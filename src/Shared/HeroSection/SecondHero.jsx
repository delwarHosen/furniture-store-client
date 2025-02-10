import React from 'react';

import banner1 from '../../assets/Image/banner.jpg'
import banner2 from '../../assets/Image/banner1.jpg'


const SecondHero = () => {
    return (
        <div>
            <div className="md:flex justify-between mt-5 md:space-y-0 space-y-4">
                <div className='md:w-7/12 flex justify-end items-center' style={{
                    backgroundImage: `url(${banner1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    borderRadius: "10px"

                }}>
                    <div className='text-end mr-8'>
                        <h4 className='md:text-[36px]  text-3xl text-[#343434] font-semibold  uppercase'>MODERN </h4>
                        <h1 className='md:text-[62px] text-[#343434] text-4xl font-bold mt-2 uppercase'>FURNITURE </h1>
                        <p className='font-bold mt-3 uppercase'>START FROM <span className='text-[#F99E1E]'> $39.OO</span>  </p>
                        <button className='bg-[#F99E1E] md:px-[35px] px-[25px] md:py-[12px] py-[10px] mt-3 text-white font-semibold rounded-md'>Shop Now</button>
                    </div>
                </div>
                <div className='md:w-2/5 flex justify-end items-center' style={{
                    backgroundImage: `url(${banner2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    borderRadius: "10px"

                }}>
                    <div className='text-end mr-8'>
                        <h4 className='md:text-[36px]  text-3xl text-[#343434] font-semibold  uppercase'>NEW</h4>
                        <h1 className='md:text-[62px] text-[#343434] text-4xl font-bold mt-2 uppercase'>LIGHTNG</h1>
                        <p className='font-bold mt-3 uppercase'>START FROM <span className='text-[#F99E1E]'> $39.OO</span>  </p>
                        <button className='bg-[#F99E1E] md:px-[35px] px-[25px] md:py-[12px] py-[10px] mt-3 text-white font-semibold rounded-md'>Shop Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecondHero;