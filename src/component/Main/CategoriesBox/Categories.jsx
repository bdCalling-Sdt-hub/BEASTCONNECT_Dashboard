import React, { useState } from "react";
import { Table, Button, Pagination, Modal, ConfigProvider } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const data = [
  {
    key: "1",
    userA: "Afsana",
    userB: "Ariyaan",
    timeDate: "11 Oct 24, 11:10PM",
  },
  {
    key: "2",
    userA: "Afsana",
    userB: "Ariyaan",
    timeDate: "11 Oct 24, 11:10PM",
  },
  {
    key: "3",
    userA: "Afsana",
    userB: "Ariyaan",
    timeDate: "11 Oct 24, 11:10PM",
  },
  // Add more data as needed
];

const ConnectionMatchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const columns = [
    {
      title: "#SL",
      dataIndex: "key",
      key: "key",
      width: 70,
      render: (text, record, index) =>
        (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "User A",
      dataIndex: "userA",
      key: "userA",
    },
    {
      title: "User B",
      dataIndex: "userB",
      key: "userB",
    },
    {
      title: "Time & Date",
      dataIndex: "timeDate",
      key: "timeDate",
      width: 180,
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Link to={`/connection/${record.key}`} >
          <EyeOutlined className="text-2xl" />
        </Link>
      ),
    },
  ];

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  return (
    <div className="p-6">
      {/* Back link */}
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <Link
          to="/connection"
          className="flex text-2xl items-center gap-2 text-gray-700 mb-6 hover:text-blue-600"
        >
          <FaAngleLeft /> Connection Match Details
        </Link>

        {/* Filter badge */}
        <div className="flex justify-end mb-3 cursor-pointer">
          <span className="bg-blue-100 text-blue-800 px-8 py-2 rounded text-base font-medium select-none">
            Filter : Month
          </span>
        </div>

      </div>
      {/* Table */}
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
          rowClassName={(record, index) =>
            index % 2 === 0 ? "bg-gray-50" : undefined
          }
          scroll={{ x: 600 }}
        />
      </ConfigProvider>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={setCurrentPage}
          showSizeChanger={false}
          size="small"
        />
      </div>

      {/* Modal for details */}
      <Modal
        title={`Match Details${selectedRecord ? `: #${selectedRecord.key}` : ""}`}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        {selectedRecord && (
          <div className="space-y-3 text-gray-800">
            <p>
              <strong>User A:</strong> {selectedRecord.userA}
            </p>
            <p>
              <strong>User B:</strong> {selectedRecord.userB}
            </p>
            <p>
              <strong>Time & Date:</strong> {selectedRecord.timeDate}
            </p>
            {/* Add more details here if available */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ConnectionMatchDetails;
