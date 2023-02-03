import React from "react";

function Signeture({ sigSrc }) {
    return (
        <div className=" invisible  md:bg-[#ff4f93] md:w-[30%] md:h-[720px] md:visible">
            <img src={sigSrc} alt="signitor" className=" w-24 h-20 m-10"></img>
        </div>
    );
}

export default Signeture;
