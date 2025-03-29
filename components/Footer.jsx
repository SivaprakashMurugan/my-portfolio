import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useState, useEffect } from "react";

const Footer = () => {
    const [day, setDay] = useState("");

    useEffect(() => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        setDay(days[new Date().getDay()]);
    }, []);

    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>2025 All Rights Reserved.</span>
                    <span className="ml-1 font-semibold animate-colorChange"> Have a good {day}!</span>
                </div>
                <div className="flex items-center">
                    <a href='https://github.com/SivaprakashMurugan' target="_blank" rel="noreferrer">Made with ❤️ by <span className='font-bold'>Sivaprakash</span></a>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>sivaprakashsarasa007@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer