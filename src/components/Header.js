import { constants } from "../constants/constants";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

function Header() {
    return (
        <div className="bg-teal-700 h-10 relative flex items-center justify-center mb-2">
            <h2 className="absolute left-1/2 transform -translate-x-1/2"> {constants.APP_NAME} </h2>
            <span className=" inline-flex absolute right-4">
                <FaRegUserCircle className="mr-2"/>
                <AiOutlineLogout />
            </span>
        </div>
    )
};

export default Header;