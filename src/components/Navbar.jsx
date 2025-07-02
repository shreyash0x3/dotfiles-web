import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="ml-[14%] mr-[14%] mt-[3%] flex justify-between items-center">
                <div className="">
                    <NavLink to="/" className="inter-light text-[30px]">DOTFILES</NavLink>
                </div>

                <div className="flex gap-4 inter-bold text-[14px]">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Home
                    </NavLink>

                    <NavLink to="/explore" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Explore
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-white text-black py-0.5 px-2 rounded hover:cursor-pointer' : "bg-[#4B454566] py-0.5 px-2 rounded hover:cursor-pointer hover:bg-[#4B4545] transition-all"}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;