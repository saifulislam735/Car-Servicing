//import React from 'react';

import { CiCalendarDate } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const OurLocation = () => {
    return (
        <div className="bg-[#151515] rounded-xl grid grid-cols-3 text-white px-[75px] py-[95px] text-center">
            <div className="flex items-center gap-2">
                <CiCalendarDate className="text-5xl" />
                <div>
                    <p >We are open monday-friday</p>
                    <h2 className="text-2xl font-extrabold"> 7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <MdOutlinePermPhoneMsg className="text-5xl" />
                <div>
                    <p>Have a question?</p>
                    <h2 className="text-2xl font-extrabold">+2546 251 2658</h2>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <GrLocation  className="text-5xl" />
                <div>
                    <p>Need a repair? our address</p>
                    <h2 className="text-2xl font-extrabold">Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;