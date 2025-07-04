import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Himage from "../assets/home-image.jpg";
import { motion } from "framer-motion";

function Home() {
    return (
        <>


            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1">
                    <div className="flex items-center mt-[7%] justify-between">
                        <div className="hero ml-[16%]">
                            <p className="inter-extra-bold-italic text-[45px]">Stole It</p>
                            <p className="inter-bold text-20px leading-5 mt-[10px]">Access dotfiles easily. <br />
                                Pick what you like. <br />
                                Make it yours.</p>
                        </div>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="mr-[16%] mix-blend-luminosity hover:mix-blend-normal hover:cursor-pointer"
                        >
                            <img src={Himage} alt="riced-os-image" className="w-[600px] h-[350px] rounded-xl" />
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>


        </>
    );
}

export default Home;