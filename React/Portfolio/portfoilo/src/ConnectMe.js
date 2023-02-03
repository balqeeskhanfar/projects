import React from "react";

function ConnectMe({ gitSrc, linkedinSrc }) {
    return (
        <div className="p-2 w-screen bg-[#ff4f93] flex absolute bottom-0 inset-x-0 md:left-0 md:m-10 md:p-0 space-x-4 md:bg-transparent md:w-auto">
            <a href="https://www.linkedin.com/in/balqees-khanfar-b91b85194/">
                <img
                    src={linkedinSrc}
                    className=" w-8 h-8 md:w-10 md:h-10"
                    alt="linked in"
                />
            </a>
            <a href="https://github.com/balqeeskhanfar">
                <img
                    src={gitSrc}
                    className="w-8 h-8 md:w-10 md:h-10"
                    alt="git hub"
                />
            </a>
        </div>
    );
}

export default ConnectMe;
