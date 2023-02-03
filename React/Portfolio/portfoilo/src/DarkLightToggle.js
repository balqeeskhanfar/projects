import React from "react";
import DarkTo from "./images/DarkTo.PNG";
import darkGo from "./images/darkGo.PNG";
import profileDark from "./images/profileDark.jpg";
import profileLight from "./images/profileLight.jpg";
//import toDark from "./js/toDark.js";
import signature_black from "./images/signature_black.png";
import signature_White from "./images/signature_White.png";
import githubLight from "./images/githubLight.png";
import linkedinLight from "./images/linkedinLight.png";
import githubDark from "./images/githubDark.png";
import linkedinDark from "./images/linkedinDark.png";

function DarkLightToggle({
    setProfileSrc,
    setSigSrc,
    setGitSrc,
    setlinkedinSrc,
}) {
    function toDark() {
        var big = document.documentElement;
        var Dimg = document.getElementById("Dimg");
        var Limg = document.getElementById("Limg");

        if (big.className === "dark") {
            big.classList.remove("dark");
            Dimg.classList.remove("hidden");
            Limg.classList.add("hidden");

            setProfileSrc(profileLight);
            setSigSrc(signature_White);
            setGitSrc(githubLight);
            setlinkedinSrc(linkedinLight);
        } else {
            big.classList.add("dark");
            Limg.classList.remove("hidden");
            Dimg.classList.add("hidden");

            setProfileSrc(profileDark);
            setSigSrc(signature_black);
            setGitSrc(githubDark);
            setlinkedinSrc(linkedinDark);
        }
    }

    return (
        <div
            id="fullAp"
            className=" invisible absolute top-0 right-0 md:relative md:top-auto md:right-auto md:bg-[#eaeaea] md:w-[70%] md:flex md:flex-row-reverse md:dark:bg-[#212121] md:h-[720px] md:visible"
        >
            <div className="m-10 ">
                <button id="dark" onClick={toDark}>
                    <img
                        src={DarkTo}
                        width="30px"
                        height="30px"
                        className="rounded-full"
                        id="Dimg"
                        alt="moon logo"
                    />
                    <img
                        src={darkGo}
                        width="35px"
                        height="35px"
                        className="rounded-full hidden"
                        id="Limg"
                        alt="sun logo"
                    />
                </button>
            </div>
        </div>
    );
}

export default DarkLightToggle;
