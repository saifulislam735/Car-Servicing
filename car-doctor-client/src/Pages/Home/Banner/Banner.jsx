// import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import slide1 from '../../../assets/assets/images/banner/1.jpg'
import slide2 from '../../../assets/assets/images/banner/2.jpg'
import slide3 from '../../../assets/assets/images/banner/3.jpg'
import slide4 from '../../../assets/assets/images/banner/4.jpg'
// import slide5 from '../../../assets/assets/images/banner/5.jpg'
// import slide6 from '../../../assets/assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img
                    src={slide1}
                    className="w-full rounded-lg " />
                <div className="ps-[100px] absolute  transform  gap-0 text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
                    <div className='translate-y-1/2 space-y-7 '>
                        <h2 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='bg-[#FF3811] px-[22px] py-[15px] rounded-lg '>Discover More</button>
                            <button className='px-[22px] py-[15px] rounded-lg border border-[#FFF]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10  bottom-10 flex -translate-y-1/2 transform  gap-5">
                    <a href="#slide4" className="btn btn-circle text-2xl bg-[rgba(255, 255, 255, 0.20)] text-white"><IoIosArrowRoundBack />
                    </a>
                    <a href="#slide2" className="btn btn-circle text-2xl bg-[#FF3811] text-white"><IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img
                    src={slide2}
                    className="w-full rounded-lg " />
                <div className="ps-[100px] absolute  transform  gap-0 text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
                    <div className='translate-y-1/2 space-y-7 '>
                        <h2 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='bg-[#FF3811] px-[22px] py-[15px] rounded-lg'>Discover More</button>
                            <button className='px-[22px] py-[15px] rounded-lg border border-[#FFF]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10  bottom-10 flex -translate-y-1/2 transform  gap-5">
                    <a href="#slide1" className="btn btn-circle text-2xl bg-[rgba(255, 255, 255, 0.20)] text-white"><IoIosArrowRoundBack />
                    </a>
                    <a href="#slide3" className="btn btn-circle text-2xl bg-[#FF3811] text-white"><IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img
                    src={slide3}
                    className="w-full rounded-lg " />
                <div className="ps-[100px] absolute  transform  gap-0 text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
                    <div className='translate-y-1/2 space-y-7 '>
                        <h2 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='bg-[#FF3811] px-[22px] py-[15px] rounded-lg'>Discover More</button>
                            <button className='px-[22px] py-[15px] rounded-lg border border-[#FFF]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10  bottom-10 flex -translate-y-1/2 transform  gap-5">
                    <a href="#slide2" className="btn btn-circle text-2xl bg-[rgba(255, 255, 255, 0.20)] text-white"><IoIosArrowRoundBack />
                    </a>
                    <a href="#slide4" className="btn btn-circle text-2xl bg-[#FF3811] text-white"><IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img
                    src={slide4}
                    className="w-full rounded-lg " />
                <div className="ps-[100px] absolute  transform  gap-0 text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
                    <div className='translate-y-1/2 space-y-7 '>
                        <h2 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='bg-[#FF3811] px-[22px] py-[15px] rounded-lg'>Discover More</button>
                            <button className='px-[22px] py-[15px] rounded-lg border border-[#FFF]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10  bottom-10 flex -translate-y-1/2 transform  gap-5">
                    <a href="#slide3" className="btn btn-circle text-2xl bg-[rgba(255, 255, 255, 0.20)] text-white"><IoIosArrowRoundBack />
                    </a>
                    <a href="#slide1" className="btn btn-circle text-2xl bg-[#FF3811] text-white"><IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;