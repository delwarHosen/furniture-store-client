import React from 'react';
import heroImg from '../../assets/Image/Hero_Banner.jpg'
import SecondHero from './SecondHero';

const HeroSection = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                borderRadius: "10px"

            }}>
                <div className='flex justify-center h-screen'>
                    <div className='text-center mt-20'>
                        <h4 className='md:text-[46px] text-3xl font-semibold text-white uppercase'>spring</h4>
                        <h1 className='md:text-[76px] text-5xl font-bold mt-2 text-white uppercase'>COLLECTION</h1>
                        <p className='font-bold text-white mt-2 uppercase'>START FROM $39.OO </p>
                        <button className='bg-[#F99E1E] md:px-[60px] px-[35px] md:py-[15px] py-[12px] mt-5 text-white font-semibold rounded-md'>Shop Now</button>
                    </div>
                </div>
            </div >
            <SecondHero></SecondHero>
        </div>
    );
};

export default HeroSection;