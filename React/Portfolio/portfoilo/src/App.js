import React, { useState } from "react";
import Definition from "./Definition";
import DarkLightToggle from "./DarkLightToggle";
import ConnectMe from "./ConnectMe";
import Signeture from "./Signeture";

import profileLight from "./images/profileLight.jpg";
import signature_White from "./images/signature_White.png";
import githubLight from "./images/githubLight.png";
import linkedinLight from "./images/linkedinLight.png";

function App() {
    const [profileSrc, setProfileSrc] = useState(profileLight);
    const [sigSrc, setSigSrc] = useState(signature_White);
    const [gitSrc, setGitSrc] = useState(githubLight);
    const [linkedinSrc, setlinkedinSrc] = useState(linkedinLight);

    return (
        <div
            id="fullApp"
            className="flex-col h-screen w-sc bg-[#eaeaea]  static flex md:flex-row-reverse text-zinc-800 md:h-fit md:dark:text-white  md:bg-transparent"
        >
            <DarkLightToggle
                setProfileSrc={setProfileSrc}
                setSigSrc={setSigSrc}
                setGitSrc={setGitSrc}
                setlinkedinSrc={setlinkedinSrc}
            ></DarkLightToggle>
            <Signeture sigSrc={sigSrc} />
            <Definition profileSrc={profileSrc} />
            <ConnectMe gitSrc={gitSrc} linkedinSrc={linkedinSrc} />
        </div>
    );
}

export default App;
