import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChallengesUserDetials = () => {
    const user = {
        name: "Afsana hamid Mim",
        email: "demo@gmail.com",
        dob: "1 Jul 2004",
        phone: "55555555555555",
        joiningDate: "16 Dec 2024",
        address: "New York, US",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    };

    return (
        <div>

            <Link className="flex items-center gap-3 mb-6 my-5 cursor-pointer text-gray-700 text-2xl" to="/challenges">
            <FaChevronLeft className="text-2xl" />User  Details
            </Link>
            <div className="max-w-4xl my-10 mx-auto p-6 bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)] ">

                {/* User info at top */}
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <h1 className="font-semibold text-lg">{user.name}</h1>
                </div>

                {/* Details list */}
                <div className="divide-y divide-gray-300 text-gray-700">
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Name</span>
                        <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Email</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Date of Birth</span>
                        <span>{user.dob}</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Phone number</span>
                        <span>{user.phone}</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Joining date</span>
                        <span>{user.joiningDate}</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Address</span>
                        <span>{user.address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengesUserDetials;
