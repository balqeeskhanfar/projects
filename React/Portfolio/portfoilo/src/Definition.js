import React from "react";
import About from "./About";
import ProfilePic from "./ProfilePic";

function Definition({ profileSrc }) {
    return (
        <div className="flex-wrap sm:flex-nowrap bg-[#eaeaea] items-center w-[100%] flex md:flex-row-reverse flex-col-reverse absolute md:top-1/2 md:left-[39%] md:transform md:-translate-x-[39%] md:-translate-y-1/2 md:mt-10 md:bg-transparent md:max-w-fit">
            <About />
            <ProfilePic profileSrc={profileSrc} />
        </div>
    );
}

export default Definition;
