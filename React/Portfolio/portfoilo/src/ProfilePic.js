import React from "react";

function ProfilePic({ profileSrc }) {
    return (
        <div className=" mt-6 md:flex md:justify-center md:mt-0">
            <img
                id="profileID"
                src={profileSrc}
                alt="profile pic"
                className="md:w-[400px] md:h-[400px] rounded-full w-[200px] h-[200px]"
            ></img>
        </div>
    );
}

export default ProfilePic;
