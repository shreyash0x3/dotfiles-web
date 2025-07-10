import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();
    const isExplore = location.pathname === "/explore";
    const isUpload = location.pathname === "/upload";

    return (
        <>
            <div className="ml-[14%] mr-[14%] mt-[3%] flex justify-between items-center">
                <div className="">
                    <NavLink to="/" className="inter-light text-[30px]">DOTFILES</NavLink>
                </div>

                <div className="flex gap-4 inter-bold text-[14px] items-center">

                    <NavLink to="/" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Home
                    </NavLink>

                    <NavLink to="/explore" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Explore
                    </NavLink>

                    {(!isExplore && !isUpload) && (
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                            Contact
                        </NavLink>
                    )}

                    {(isExplore || isUpload) && (
                        <NavLink to="/upload" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                            Upload
                        </NavLink>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;