import React from "react";
import {
    IconBrandJavascript,
    IconBrandReact,
    IconBrandTailwind,
} from "@tabler/icons";

function Frames() {
    return (
        <div className="mb:1 mt:1 xss:mb-20 flex xss:mt-10 justify-center w-[90%] md:space-x-5 md:mr-3 md:mb-0">
            <IconBrandJavascript className="sm:w-10 sm:h-10" />
            <IconBrandReact className="sm:w-10 sm:h-10" />
            <IconBrandTailwind className="sm:w-10 sm:h-10" />
        </div>
    );
}

export default Frames;
