import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HyprRice from "../assets/hypr-rice2.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


function Home() {
    const words = ["Pick It", "Clone It", "Use It", "Tweak It", "Own It"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 4000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1">
                    <div className="flex items-center mt-[7%] justify-between">
                        <div className="hero ml-[16%]">

                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={index}
                                    className="inter-extra-bold-italic text-[45px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {words[index]}
                                </motion.p>
                            </AnimatePresence>

                            <p className="inter-bold text-20px leading-5 mt-[10px]">Access dotfiles easily. <br />
                                Pick what you like. <br />
                                Make it yours.</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="mr-[16%] mix-blend-luminosity hover:mix-blend-normal"
                        >
                            { /* Image by https://github.com/1amSimp1e/dots*/}
                            <img src={HyprRice} alt="riced-os-image" className="w-[600px] h-[350px] rounded-xl" />
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>

        </>
    );
}

export default Home;