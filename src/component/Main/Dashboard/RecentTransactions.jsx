import { ConfigProvider, Table, Pagination, Space, message, Modal } from "antd";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const staticUsers = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    role: "User",
    createdAt: "2023-05-01, 10:00 AM",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Admin",
    createdAt: "2023-04-28, 09:30 AM",
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "User",
    createdAt: "2023-04-25, 11:15 AM",
  },
  {
    id: "4",
    fullName: "Bob Williams",
    email: "bob.williams@example.com",
    role: "User",
    createdAt: "2023-04-22, 03:45 PM",
  },
  {
    id: "5",
    fullName: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Moderator",
    createdAt: "2023-04-20, 02:00 PM",
  },
  {
    id: "6",
    fullName: "Michael Brown",
    email: "michael.brown@example.com",
    role: "User",
    createdAt: "2023-04-18, 08:00 AM",
  },
  {
    id: "7",
    fullName: "Linda Wilson",
    email: "linda.wilson@example.com",
    role: "User",
    createdAt: "2023-04-15, 01:20 PM",
  },
  {
    id: "8",
    fullName: "David Miller",
    email: "david.miller@example.com",
    role: "Admin",
    createdAt: "2023-04-12, 04:10 PM",
  },
  {
    id: "9",
    fullName: "Susan Moore",
    email: "susan.moore@example.com",
    role: "User",
    createdAt: "2023-04-10, 10:40 AM",
  },
];

const RecentTransactions = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [pageSize, setPageSize] = useState(6); // Items per page
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user details

  // Filter users based on searchText
  const filteredData = staticUsers.filter((user) =>
    user.fullName.toLowerCase().includes(searchText.toLowerCase())
  );

  // Paginate the filtered data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const dataSource = paginatedData.map((user, index) => ({
    key: user.id,
    si: (currentPage - 1) * pageSize + index + 1,
    userName: user.fullName,
    email: user.email,
    role: user.role,
    joinDate: user.createdAt.split(",")[0],
  }));

  // Columns definition for Table
  const columns = [
    {
      title: "#SL",
      dataIndex: "si",
      key: "si",
      align: "center",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle" className="flex flex-row justify-center">
          <button onClick={() => viewDetails(record)}>
            <HiOutlineDotsHorizontal className="text-2xl" />
          </button>
        </Space>
      ),
    },
  ];

  // Open Modal with User Details
  const viewDetails = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  // Close Modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  return (
    <div className="w-full col-span-full md:col-span-6 bg-white rounded-lg ">
      <div className="flex items-center justify-between flex-wrap my-10">
        <h1 className="text-2xl flex items-center">Recent Users</h1>
        {/* Optional: You can add a search input here */}
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
          dataSource={dataSource}
          pagination={false} // Disable default pagination
          scroll={{ x: 500 }}
          className="text-center"
        />
      </ConfigProvider>

      {/* Custom Pagination */}
      <div className="flex justify-center my-10">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData.length}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
            setPageSize(pageSize);
          }}
          showSizeChanger
          pageSizeOptions={["6", "10", "20", "50"]}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        />
      </div>

      {/* User Details Modal */}
      <Modal open={isModalVisible} onCancel={handleCancel} footer={null} title="User Details">
        {selectedUser && (
          <div>
            <p className="flex items-center justify-between my-5">
              <strong>Name:</strong> {selectedUser.userName}
            </p>
            <p className="flex items-center justify-between my-5">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p className="flex items-center justify-between my-5">
              <strong>Role:</strong> {selectedUser.role}
            </p>
            <p className="flex items-center justify-between my-5">
              <strong>Join Date:</strong> {selectedUser.joinDate}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RecentTransactions;
