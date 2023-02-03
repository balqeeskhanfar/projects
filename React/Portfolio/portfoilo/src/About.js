import React from "react";
import Frames from "./Frames";

function About() {
    return (
        <div className=" w-[-webkit-fill-available] md:bg-[#eaeaea] mt-5 xxxs:ml-10 md:w-[390px] md:h-[390px] xxxs:mr-2 items-center flex flex-col md:max-w-sm md:ml-20 sm:justify-center md:items-start md:bg-transparent">
            <h2 className="text-[5px] xxxs:text-[10px] xxs:text-lg md:text-lg mb-1 font-medium">
                Front End Developer
            </h2>
            <h1 className="text-[5px] xxxs:text-[10px] xxs:text-2xl sm:text-2xl md:text-4xl font-bold">
                Balqees Khanfar
            </h1>
            <p className="text-[5px] xxxs:text-[10px] xxs:text-sm text-center md:text-sm mt-6 font-medium md:text-left">
                There wasn't a bird in the sky, but that was not what caught her
                attention. It was the clouds. The deep green that isn't the
                color of clouds, but came with these. She knew what was coming
                and she hoped she was prepared.
            </p>
            <div className="flex mt-8">
                <button className=" hidden invisible sm:visible w-[150px] mr-3 ml-2 bg-transparent hover:bg-[#ff4f93] text-[#ff4f93] font-semibold hover:text-white py-2 px-4 border-[3px] border-[#ff4f93] hover:border-transparent rounded-full">
                    <a href="./files/balqeesCV.pdf" download>
                        Download CV
                    </a>
                </button>
                <button className=" hidden sm:visible w-[150px] mr-2 ml-3 bg-transparent hover:bg-[#ff4f93] text-[#ff4f93] font-semibold hover:text-white py-2 px-4 border-[3px] border-[#ff4f93] hover:border-transparent rounded-full">
                    <a href="mailto:balqeeskhanfar2@gmail.com">Contact</a>
                </button>
            </div>
            <Frames></Frames>
        </div>
    );
}

export default About;
