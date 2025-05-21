import React, { useState } from "react";
import { Modal } from "antd";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const staticData = [
    {
        id: 1,
        userName: "John Doe",
        transactionId: "TX123456789",
        amount: "150.00",
        subscriptionType: "Monthly",
    },
    {
        id: 2,
        userName: "Jane Smith",
        transactionId: "TX987654321",
        amount: "200.00",
        subscriptionType: "Yearly",
    },
    {
        id: 3,
        userName: "Alice Johnson",
        transactionId: "TX112233445",
        amount: "300.00",
        subscriptionType: "Weekly",
    },
    // Add more data as needed
];

const pageSize = 2;

const SubscriptionTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedData = staticData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const showModal = (row) => {
        setSelectedRow(row);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedRow(null);
    };

    return (
        <div className="p-5 overflow-x-auto">

            <div className="mb-4 flex items-center justify-between flex-wrap">
                <Link
                    to="/"
                    className="flex text-2xl items-center gap-2 text-gray-700 mb-6 hover:text-blue-600"
                >
                    <FaAngleLeft />  User Report
                </Link>

                {/* Filter badge */}
                <div className="flex justify-end mb-3 cursor-pointer">
                    <span className="bg-blue-100 text-blue-800 px-8 py-2 rounded text-base font-medium select-none">
                        Filter : Month
                    </span>
                </div>
            </div>

            <table className="w-full border-collapse border-[#02aef4] min-w-[1000px]">
                <thead className="bg-[#02aef4] text-white">
                    <tr>
                        <th className="border-gray-300 px-4 py-2 text-left">#SI</th>
                        <th className="border-gray-300 px-4 py-2 text-left">User Name</th>
                        <th className="border-gray-300 px-4 py-2 text-left">Transaction ID</th>
                        <th className="border-gray-300 px-4 py-2 text-left">Amount</th>
                        <th className="border-gray-300 px-4 py-2 text-left">Subscription Type</th>
                        <th className="border-gray-300 px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, index) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            <td className="border-gray-300 px-4 py-2">{(currentPage - 1) * pageSize + index + 1}</td>
                            <td className="border-gray-300 px-4 py-2">{row.userName}</td>
                            <td className="border-gray-300 px-4 py-2">{row.transactionId}</td>
                            <td className="border-gray-300 px-4 py-2">${row.amount}</td>
                            <td className="border-gray-300 px-4 py-2">{row.subscriptionType}</td>
                            <td className="border-gray-300 px-4 py-2">
                                <Link
                                    to={`/user-report/${row.transactionId}`}
                                    className="cursor-pointer"
                                    title="View Details"
                                >
                                    <HiOutlineDotsHorizontal className="text-2xl font-semibold" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-end mt-4 space-x-2">
                <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="px-3 py-1 border rounded">{currentPage}</span>
                <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, Math.ceil(staticData.length / pageSize)))}
                    disabled={currentPage === Math.ceil(staticData.length / pageSize)}
                >
                    Next
                </button>
            </div>


        </div>
    );
};

export default SubscriptionTable;
