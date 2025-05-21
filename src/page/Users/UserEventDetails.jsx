import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { ConfigProvider, Table } from "antd";
import { IoEyeOutline } from "react-icons/io5";

const staticUserData = {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    isBanned: false,
    phoneNumber: "123-456-7890",
    role: "User",
    createdAt: "2023-05-01T10:00:00Z",
};

const staticChallengeList = [
    {
        id: "c1",
        challengeName: "Code Sprint 2023",
        percipient: "John Doe",
        winner: "Alice Johnson",
        date: "2023-04-20",
    },
    {
        id: "c2",
        challengeName: "Hackathon May",
        percipient: "Jane Smith",
        winner: "Bob Williams",
        date: "2023-05-01",
    },
    {
        id: "c3",
        challengeName: "Bug Bash",
        percipient: "Michael Brown",
        winner: "Jane Smith",
        date: "2023-03-15",
    },
];

const UserEventDetails = () => {
    const [userDataFull] = useState(staticUserData);

    const columns = [
        {
            title: "#SL",
            dataIndex: "sl",
            key: "sl",
            width: 60,
            align: "center",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Challenge Name",
            dataIndex: "challengeName",
            key: "challengeName",
        },
        {
            title: "Percipient",
            dataIndex: "percipient",
            key: "percipient",
        },
        {
            title: "Winner",
            dataIndex: "winner",
            key: "winner",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            render: (date) =>
                new Date(date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }),
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (_, record) => (
                <Link to={`/challenges/${record.id}`}>
                    <IoEyeOutline className="text-2xl " />
                </Link>
            ),
        },
    ];

    return (
        <div>
            <Link to={"/users"} className="text-2xl flex items-center mt-5">
                <FaAngleLeft /> User Details
            </Link>

            <div className="my-10 w-full md:w-2/4 ">
                {/* User Profile Section */}
                <div className="flex items-center justify-between gap-5 mb-5">
                    <div className="flex items-center gap-5">
                        <img
                            className="w-24 h-24 rounded-full"
                            src="https://via.placeholder.com/96?text=User"
                            alt="User"
                        />
                        <h1 className="text-2xl font-semibold">{userDataFull.fullName}</h1>
                    </div>
                </div>

                {/* User Details Section */}
                <div className="space-y-3 mb-10">
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Name</span>
                        <span>Afsana hamid Mim</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Email</span>
                        <span>demo@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Date of Birth</span>
                        <span>1 Jul 2004</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Phone number</span>
                        <span>55555555555555</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Joining date</span>
                        <span>16 Dec 2024</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Create Challenges</span>
                        <span className="flex items-center gap-1">04 <FaChevronRight /></span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042]">
                        <span className="font-semibold">Join Challenges</span>
                        <span className="flex items-center gap-1">04 <FaChevronRight /></span>
                    </div>
                </div>



            </div>

            {/* Challenge Table */}
            <div>
                <h2 className="text-xl font-semibold mb-4">User Challenges</h2>
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: "#02aef4",
                                headerColor: "#fff",
                                headerBorderRadius: 5,
                            },
                        },
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={staticChallengeList}
                        rowKey="id"
                        pagination={{ pageSize: 5 }}
                        bordered
                    />
                </ConfigProvider>
            </div>

           
        </div>
    );
};

export default UserEventDetails;
