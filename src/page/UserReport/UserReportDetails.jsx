import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserReportDetails = () => {
    // Sample static data to fill the fields
    const reportedBy = {
        name: "Mr. Bashar islam",
        email: "demo@gmail.com",
        phone: "028232949834",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    const reportUser = {
        name: "Ariyaan",
        email: "demo@gmail.com",
        phone: "028232949834",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    };

    return (
        <div className="p-5">
            <Link to="/user-report" className="flex items-center text-2xl gap-3 mb-6 cursor-pointer text-gray-700">
                <FaChevronLeft className="text-2xl" /> User Report Details
            </Link>
            <div className="max-w-5xl mx-auto p-6 rounded-lg border border-[#d4a465] flex gap-8">
                {/* Reported By Card */}
                <div className="flex-1 border-r border-[#d4a465] pr-6">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={reportedBy.avatar}
                            alt={reportedBy.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <h2 className="text-xl font-semibold">{reportedBy.name}</h2>
                    </div>
                    <div className="space-y-4 text-sm text-gray-900 font-semibold">
                        <div className="flex justify-between border-b border-[#d4a465] pb-1">
                            <span>Report By</span>
                            <span>{reportedBy.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#d4a465] pb-1">
                            <span>Email</span>
                            <span>{reportedBy.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#d4a465] pb-1">
                            <span>Phone Number</span>
                            <span>{reportedBy.phone}</span>
                        </div>
                        <div className="flex justify-between pt-1">
                            <span>Details</span>
                            <span className="max-w-[60%] text-gray-700 font-normal">
                                The product shared by this vendor appears to be illegal and should
                                be reviewed.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Report User Card */}
                <div className="flex-1 pl-6">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={reportUser.avatar}
                            alt={reportUser.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <h2 className="text-xl font-semibold">{reportUser.name}</h2>
                    </div>
                    <div className="space-y-4 text-sm text-gray-900 font-semibold">
                        <div className="flex justify-between border-b border-[#d4a465] pb-1">
                            <span>Report User</span>
                            <span>{reportUser.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#d4a465] pb-1">
                            <span>Email</span>
                            <span>{reportUser.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#d4a465] pb-1">
                            <span>Phone Number</span>
                            <span>{reportUser.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReportDetails;
