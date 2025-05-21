import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventItemsDetails = () => {
    // Sample user data
    const user = {
        id: "1",
        name: "Afsana hamid mim",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        location: "New York, US",
    };

    // Sample challenge data
    const challenge = {
        name: "2min Burger Challenge",
        score: 20,
        coins: 20,
        time: "2 Day 2 Hour 5min",
        percipientList: 10,
        winner: "01",
        description:
            "Just smashed out 25 push-ups to push my limits and clear my mind — now it’s your turn! If you’re seeing this, I challenge you to do the same. Tag me when you’re done. Let’s go! 💪",
        videoThumbnail:
            "https://images.unsplash.com/photo-1526406915895-c0aeeb220db3?auto=format&fit=crop&w=800&q=80",
    };

    return (
        <div>
            <div className="max-w-4xl p-5">
                {/* Header */}
                <Link
                    to="/event"
                    className="flex items-center gap-3 mb-6 cursor-pointer text-gray-700  "
                >
                    <IoChevronBackSharp className="text-2xl" />
                    <h1 className="text-2xl font-semibold">Event Details</h1>
                </Link>

                {/* Main content container */}
                <div className="bg-blue-50 rounded-md p-6 border border-blue-300">
                    {/* User Info */}
                    <div

                        className="flex items-center gap-4 mb-6"
                    >
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">{user.name}</h2>
                            <p className="flex items-center text-gray-600 text-sm mt-1">
                                <FaMapMarkerAlt className="mr-1" /> {user.location}
                            </p>
                        </div>
                    </div>

                    {/* Info grid */}
                    <div className="grid grid-cols-3 gap-6 text-sm mb-6">
                        <div>
                            <div className="font-semibold">Challenge Name</div>
                            <div>{challenge.name}</div>
                        </div>
                        <div>
                            <div className="font-semibold">Challenge Score</div>
                            <div>{challenge.score}</div>
                        </div>
                        <div>
                            <div className="font-semibold">Coins</div>
                            <div>{challenge.coins}</div>
                        </div>

                        <div>
                            <div className="font-semibold">Time</div>
                            <div>{challenge.time}</div>
                        </div>
                        <div>
                            <div className="font-semibold">Percipient List</div>
                            <div>{challenge.percipientList}</div>
                        </div>
                        <div>
                            <div className="font-semibold">Winner</div>
                            <div>{challenge.winner}</div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <div className="font-semibold mb-2">Description</div>
                        <p className="text-gray-700">{challenge.description}</p>
                    </div>

                    {/* Video thumbnail */}
                    <div className="relative w-full max-w-lg aspect-video rounded-md overflow-hidden shadow-lg cursor-pointer">
                        <img
                            src={challenge.videoThumbnail}
                            alt="Challenge video thumbnail"
                            className="w-full h-full object-cover"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        {/* Play icon overlay */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-white opacity-90"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventItemsDetails;
