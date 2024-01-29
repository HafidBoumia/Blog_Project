import { AiOutlineFacebook } from "react-icons/ai";
import { LiaGithubSquare } from "react-icons/lia";
import { RiTwitterXFill  } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg"
import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function SocialPlugin() {

    return (
        <div className="bg-white px-4 py-3 h-auto">
            <span className="font-medium">Social Plugin</span>
            <div className="flex items-center gap-4 py-4 px-3">
                <Link to='https://facebook.com'><AiOutlineFacebook size='35px'/></Link>
                <Link to='https://twitter.com'><RiTwitterXFill  size="30px" /></Link>
                <Link to='https://github.com'><LiaGithubSquare  size="40px"/></Link>
                <Link to='https://instagram.com'><CgInstagram size="30" /></Link>
                <Link to='https://telegram.com'><LiaTelegram size="30" /></Link>
            </div>
        </div>
    )
}