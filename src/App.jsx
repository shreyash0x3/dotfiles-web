import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import NotSupported from "./pages/NotSupported"

function App() {

    const[isSupported, setIsSupported] = useState(window.innerWidth >= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsSupported(window.innerWidth >= 800);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isSupported) return <NotSupported />;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;