// import React from 'react';
import aboutUsImgPerson from '../../../assets/assets/images/about_us/person.jpg'
import aboutUsImgParts from '../../../assets/assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="grid grid-cols-2 gap-14">
            <div className='relative'>
                <img className='lg:h-4/5 lg:w-4/5 rounded-md' src={aboutUsImgPerson} alt="" />
                <img className='lg:h-3/6 lg:w-6/12 rounded-md absolute bottom-5 right-5 z-10 border-[10px] border-white' src={aboutUsImgParts} alt="" />
            </div>

            <div className="space-y-5 me-40">
                <h4 className="text-xl text-[#FF3811] font-bold">About Us</h4>
                <h2 className="text-[#151515] font-bold text-[45px] m-0">We are qualified & of experience in this field</h2>
                <p className="text-[16px] text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="bg-[#FF3811] px-[22px] py-[15px] rounded-lg text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;