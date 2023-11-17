import {FaGithub, FaLinkedin} from "react-icons/fa";
import {LuMail} from "react-icons/lu";
import {Link} from "@nextui-org/react";


export const LeftShorCut = () => {
    return (
        <div className='flex flex-col items-center gap-3 fixed bottom-10 left-10 '>
            <a href="https://linkedin.com" target='_blank'>
                <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target='_blank'>
                <LuMail />
            </a>
            <a href="https://linkedin.com" target='_blank'>
                <FaGithub />
            </a>
            <div style={{ height: '50px ', borderLeft: '1px solid white' }}></div>
        </div>
    )
}
