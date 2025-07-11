import { useState } from "react";
import Navbar from "../components/Navbar";
import { image, li, span } from "framer-motion/client";

function Upload() {

    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        os: "",
        wm: "",
        description: "",
        github: "",
    })

    const handleImageUpload = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length + images.length > 3) {
            alert("You can only upload upto 3 images.");
            return;
        }

        setImages((prev) => [...prev, ...selectedFiles]);
    }

    const handleSubmit = (e) => {
        //whole form submit
    }

    const handleChange = (e) => {
        //input field change to store in formData
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const isFormValid = () => {
        return (
            formData.os.trim() &&
            formData.wm.trim() &&
            formData.description.trim() &&
            formData.github.trim() &&
            images.length > 0
        );
    };

    return (
        <>
            <Navbar />

            <div className="flex items-center justify-center mt-[3%]">

                <div className="bg-[#4B454533] w-[1100px] h-[750] flex flex-col items-center justify-center rounded-md">

                    <div className="bg-[#4B454566]  w-[1000px] h-[80px] flex flex-col justify-center items-center mt-[3%] border border-[#4B454566] mb-[3%] rounded-md">

                        <input id="imageUpload" type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} required />
                        <label htmlFor="imageUpload" className="inter-bold text-[23px] hover:cursor-pointer">
                            {images.length === 3 ? "3 Images Selected" : "Click to Upload Images"}
                        </label>

                        <ul className="flex gap-3 inter-light mt-[5px]">
                            {images.map((file, index) => (
                                <li key={index}>
                                    {file.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="w-[820px] inter-light mt-[1% mt-[2]]">

                            <div className="os & wm flex justify-between mb-[1%]">
                                <div className="os">
                                    <label className="ml-[1%] text-[14px] inter-bold">Operating System :</label>
                                    <input name="os" value={formData.os} onChange={handleChange} required className="w-full bg-[#4B454566] pt-2 pb-2 pr-1 pl-3 rounded text-sm outline-none" placeholder="eg. Arch Linux" />
                                </div>
                                <div className="wm">
                                    <label className="ml-[1%] text-[14px] inter-bold">Windows Manager :</label>
                                    <input name="wm" value={formData.wm} onChange={handleChange} required className="w-full bg-[#4B454566] pt-2 pb-2 pr-1 pl-3 rounded text-sm outline-none" placeholder="eg. Hyprland" />
                                </div>
                            </div>

                            <div className="description mt-[2%] mb-[1%]">
                                <label className="ml-[1%] text-[14px] inter-bold">Description :</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} required rows={5} className="w-full bg-[#4B454566] pt-2 pb-2 pr-1 pl-3 rounded text-sm outline-none" >
                                </textarea>
                            </div>

                            <div className="github mt-[1%] mb-[3%]">
                                <label className="ml-[1%] text-[14px] inter-bold">Github Repo Link :</label>
                                <input name="github" value={formData.github} onChange={handleChange} required className="w-full bg-[#4B454566] pt-2 pb-2 pr-1 pl-3 rounded text-sm outline-none" placeholder="eg. link to your dotfiles repository" />
                            </div>

                            <div className="flex justify-center mb-[3%] mt-[3%]">
                                <button className={`px-5 py-1 rounded inter-bold cursor-pointer active:scale-95 ${isFormValid() ? "bg-[#3B82F6] text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"
                                    }`}>
                                    Upload
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    ) 
}


export default Upload