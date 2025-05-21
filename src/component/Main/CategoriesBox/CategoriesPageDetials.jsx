import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoriesPageDetials = () => {
    const userA = {
        name: "Ariyaan Ahammed",
        matchDate: "11 April, 2025",
        email: "ariyaan@gmail.com",
        location: "New York",
        interest: "Gym, Drawing, Puzzle Solving",
        avatar:
            "https://randomuser.me/api/portraits/men/32.jpg", // example avatar
    };

    const userB = {
        name: "Afsana hamid mim",
        matchDate: "11 April, 2025",
        email: "afsana@gmail.com",
        location: "Paris",
        interest: "Gym, Drawing, Puzzle Solving",
        avatar:
            "https://randomuser.me/api/portraits/women/44.jpg", // example avatar
    };

    return (
        <div className=" p-6">
            <Link  className="flex items-center text-2xl gap-3 mb-6 cursor-pointer text-gray-700" to="/connection">
                <FaAngleLeft className="text-2xl" />  Connection Details
            </Link>
            <div className="flex items-center justify-center gap-12 p-10 min-h-[300px] bg-white">
                {/* User A Card */}
                <Link to="/connection/user/1" className="border border-blue-400 border-b-4 rounded-xl p-6 min-w-full md:min-w-[400px] shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={userA.avatar}
                            alt={userA.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <h2 className="font-semibold text-lg">{userA.name}</h2>
                    </div>
                    <div className="space-y-3 text-gray-700 text-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">Match Date</span>
                            <span>{userA.matchDate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">User Email</span>
                            <span>{userA.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">User Location</span>
                            <span>{userA.location}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">User Interest</span>
                            <span>{userA.interest}</span>
                        </div>
                    </div>
                </Link>

                {/* Heart Icon */}
                <div className="text-8xl select-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="url(#gradient)"
                        className="w-16 h-16"
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#0ea5e9" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                        </defs>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
            6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>

                {/* User B Card */}
                <Link to="/connection/user/2" className="border border-blue-400 border-b-4 rounded-xl p-6 min-w-full md:min-w-[400px] shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={userB.avatar}
                            alt={userB.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <h2 className="font-semibold text-lg">{userB.name}</h2>
                    </div>
                    <div className="space-y-3 text-gray-700 text-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">Match Date</span>
                            <span>{userB.matchDate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">User Email</span>
                            <span>{userB.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">User Location</span>
                            <span>{userB.location}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">User Interest</span>
                            <span>{userB.interest}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CategoriesPageDetials;
