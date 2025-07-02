import Navbar from "../components/Navbar";
import github from "../assets/github-icon.png"
import twitter from "../assets/twitter-icon.png"
import email from "../assets/email-icon.png"

function Contact() {
    return (
        <>
            <Navbar />

            <div class="flex items-center justify-center mt-[10%]">
                <div class="flex flex-col gap-4">
                    <a href="https://github.com/shreyash0x3" target="_blank" className="flex items-center bg-[#4B454566] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out mix-blend-luminosity hover:mix-blend-normal">
                            <img src={github} alt="github-icon" className="h-[43px] w-[43px] p-1"/>
                            <p className="inter-bold ml-1 pr-3 text-[20px]">Github</p>
                    </a>

                    <a href="https://x.com/shreyash0x3" target="_blank" className="flex items-center bg-[#4B454566] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out
 mix-blend-luminosity hover:mix-blend-normal">
                            <img src={twitter} alt="github-icon" className="h-[45px] w-[45px]"/>
                            <p className="inter-bold ml-1 pr-3 text-[20px]">Twitter</p>
                    </a>

                    <a href="mailto:shreyashkakad03@gmail.com"  className="flex items-center bg-[#4B454566] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out
 mix-blend-luminosity hover:mix-blend-normal">
                            <img src={email} alt="github-icon" className="h-[45px] w-[45px]"/>
                            <p className="inter-bold ml-1 pr-3 text-[20px]">Email</p>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Contact;