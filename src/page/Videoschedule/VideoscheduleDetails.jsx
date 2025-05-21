import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const VideoscheduleDetails = () => {
    return (
        <div className=" p-5">
            <div className="mb-4 flex items-center justify-between flex-wrap">
                <Link
                    to="/video-schedule"
                    className="flex text-2xl items-center gap-2 text-gray-700 mb-6 hover:text-blue-600"
                >
                    <FaAngleLeft />  Videos Schedule
                </Link>

                {/* Filter badge */}
                <div className="flex justify-end mb-3 cursor-pointer">
                    <span className="bg-blue-100 text-blue-800 px-8 py-2 rounded text-base font-medium select-none">
                        Filter : Month
                    </span>
                </div>
            </div>
            <div className="max-w-md  rounded-lg overflow-hidden shadow-lg bg-white">

                {/* Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
                        alt="Profile"
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    {/* Optional small overlay icon can go here */}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold">Ariyaan Ahammed</h2>
                        <p className="text-gray-500">Let’s Skip the Small Talk</p>
                    </div>

                    <div className="flex items-center justify-between text-gray-600 text-sm font-medium">
                        <div className="flex items-center gap-1">
                            <HiLocationMarker className="text-lg text-gray-500" />
                            <span>San Francisco</span>
                        </div>
                        <div>6 May ,2025</div>
                    </div>

                    <div className="flex items-center justify-between text-gray-600 text-sm font-medium">
                        <div>10:20am</div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-600"></div>
                            <span>3min</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoscheduleDetails;
