import React, { useState } from "react";
import { Pagination } from "antd";
import { FaChevronLeft, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const sampleData = [
    {
        id: "1",
        name: "Afsana hamid mim",
        location: "New York, US",
        challengeName: "2min Burger Challenge",
        challengeScore: 20,
        coins: 20,
        time: "2 Day 2 Hour 5min",
        description: "Just ......",
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        videoThumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: "2",
        name: "John Doe",
        location: "Paris, France",
        challengeName: "10k Step Challenge",
        challengeScore: 50,
        coins: 50,
        time: "1 Day 3 Hour",
        description: "Walking challenge",
        imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
        videoThumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=60",
    },
    // Add more items if you want
];

const EventItems = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    // Calculate the current page data slice
    const paginatedData = sampleData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="p-5  ">
            <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2 cursor-pointer">
                <FaChevronLeft /> Challenges List
            </h1>

            {paginatedData.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center border border-blue-300 rounded-lg mb-4 p-4 bg-blue-50"
                >
                    {/* Left: Profile Image */}
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover mr-6"
                    />

                    {/* Middle: Info */}
                    <div className="flex-grow">
                        <h2 className="font-semibold text-lg">{item.name}</h2>
                        <p className="flex items-center text-gray-600 text-sm mb-3">
                            <FaMapMarkerAlt className="mr-1" /> {item.location}
                        </p>
                        <hr className="my-2" />
                        <div className="grid grid-cols-5 gap-4 text-sm">
                            <div>
                                <div className="font-semibold">Challenge Name</div>
                                <div>{item.challengeName}</div>
                            </div>
                            <div>
                                <div className="font-semibold">Challenge Score</div>
                                <div>{item.challengeScore}</div>
                            </div>
                            <div>
                                <div className="font-semibold">Coins</div>
                                <div>{item.coins}</div>
                            </div>
                            <div>
                                <div className="font-semibold">Time</div>
                                <div>{item.time}</div>
                            </div>
                            <div>
                                <div className="font-semibold">Description</div>
                                <div>{item.description}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Video thumbnail + View Details button */}
                    <div className="flex flex-col items-center ml-6">
                        <img
                            src={item.videoThumbnail}
                            alt="Video thumbnail"
                            className="w-24 h-14 rounded-md mb-3 object-cover cursor-pointer"
                        />
                        <Link
                            to={`/event/${item.id}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-end mt-6">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={sampleData.length}
                    showTotal={(total) => `Total ${total} items`}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                    style={{ color: "#02aef4" }}
                />
            </div>
        </div>
    );
};

export default EventItems;
