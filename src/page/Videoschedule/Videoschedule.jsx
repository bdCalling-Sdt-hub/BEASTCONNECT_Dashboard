import React, { useState } from "react";
import { Table, Pagination, Modal, Button, ConfigProvider } from "antd";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const sampleData = [
    {
        key: "1",
        userName: "John Doe",
        title: "Frontend Developer",
        location: "New York",
        date: "2023-05-10",
        duration: "3 months",
    },
    {
        key: "2",
        userName: "Jane Smith",
        title: "Backend Developer",
        location: "San Francisco",
        date: "2023-06-15",
        duration: "6 months",
    },
    {
        key: "3",
        userName: "Alice Johnson",
        title: "UI/UX Designer",
        location: "Chicago",
        date: "2023-04-20",
        duration: "4 months",
    },
    {
        key: "4",
        userName: "Bob Williams",
        title: "Project Manager",
        location: "Seattle",
        date: "2023-07-01",
        duration: "1 year",
    },
    // Add more entries as needed
];

const Videoschedule = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const paginatedData = sampleData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const columns = [
        {
            title: "#SI",
            dataIndex: "key",
            key: "key",
            width: 70,
            render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
        },
        {
            title: "User Name",
            dataIndex: "userName",
            key: "userName",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
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
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (

                <Link to={`/video-schedule/${record.key}`}>
                    <IoEyeOutline className="text-2xl" />
                </Link>
            ),
        },
    ];

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedRecord(null);
    };

    return (
        <div className="p-5">

            <div className="mb-4 flex items-center justify-between flex-wrap">
                <Link
                    to="/"
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
                    dataSource={paginatedData}
                    pagination={false}
                    bordered
                    rowKey="key"
                    rowClassName={(record, index) => (index % 2 === 0 ? "bg-gray-50" : "")}
                    scroll={{ x: "max-content" }}
                />
            </ConfigProvider>

            <div className="flex justify-end mt-4">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={sampleData.length}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                    size="small"
                />
            </div>

        </div>
    );
};

export default Videoschedule;
