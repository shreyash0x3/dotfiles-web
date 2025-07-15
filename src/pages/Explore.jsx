import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { fireStore } from "../firebase";
import { motion, AnimatePresence } from "framer-motion";


function Explore() {
    const [users, setUsers] = useState([]);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [imageIndexes, setImageIndexes] = useState({});

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(fireStore, "users"), (snapshot) => {
            const userList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(userList);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndexes((prevIndexes) => {
                const updated = {};
                users.forEach((user) => {
                    const total = user.imageURLs?.length || 0;
                    if (total > 0) {
                        const current = prevIndexes[user.id] || 0;
                        updated[user.id] = (current + 1) % total;
                    }
                });
                return updated;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [users]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-[3%]">
                {users.map((user, index) => {
                    const imageList = user.imageURLs || [];
                    const currentImageIndex = imageIndexes[user.id] || 0;

                    return (
                        <div key={user.id} className="bg-[#2A2A2E33] w-[750px] p-5 flex flex-col rounded-md text-[#D1D5DB] mb-[4%]">

                            <div className="image-div relative w-full h-[450px] overflow-hidden rounded-md">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.img
                                        key={imageList[currentImageIndex]}
                                        src={imageList[currentImageIndex]}
                                        alt={`user-${currentImageIndex}`}
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        className="absolute top-0 left-0 w-full h-full object-contain rounded-md"
                                    />
                                </AnimatePresence>
                            </div>


                            <div className="tags-div flex gap-4 justify-start mt-[1.3%] ml-[2px]">
                                <p className="pl-2 pr-2 bg-[#FFFFFFCC] inter-bold text-[14px] text-black rounded-sm">{user.os}</p>
                                <p className="pl-2 pr-2 bg-[#FFFFFFCC] inter-bold text-[14px] text-black rounded-sm">{user.wm}</p>
                            </div>

                            <div className="description-div flex flex-col mt-[2%] inter-bold text-[14px] ml-[2px]">
                                <p className="mb-[2px]">Description: </p>
                                <p className="mt-[2px] bg-[#1F1F23CC] p-3 pl-4 rounded-sm inter-light">{user.description}</p>
                            </div>

                            <div className="github-div flex flex-col mt-[2%] inter-bold text-[14px] ml-[2px]">
                                <p className="mb-[2px]">Github Repo Link: </p>

                                <div className="link-div flex mt-2 justify-between">
                                    <p className="mt-[2px] bg-[#1F1F23CC] pl-4 pr-4 p-1 rounded-sm inter-light">{user.github}</p>

                                    <div className="buttons-div flex gap-4">
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(user.github)
                                                    .then(() => {
                                                        setCopiedIndex(index);
                                                        setTimeout(() => setCopiedIndex(null), 2000);
                                                    });
                                            }}
                                            disabled={copiedIndex === index}
                                            className={`pl-2 pr-2 rounded-sm active:scale-95 disabled:cursor-not-allowed ${copiedIndex === index
                                                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                                                : 'bg-[#3B82F6] hover:cursor-pointer'
                                                }`}
                                        >
                                            {copiedIndex === index ? 'Copied' : 'Copy'}
                                        </button>

                                        <button
                                            onClick={() => window.open(user.github, '_blank')}
                                            className="bg-[#3B82F6] pl-2 pr-2 rounded-sm hover:cursor-pointer active:scale-95"
                                        >
                                            Open
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Explore;
