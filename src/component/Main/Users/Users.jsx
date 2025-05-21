import { useEffect, useState } from "react";
import { ConfigProvider, Table, Form, Input, DatePicker } from "antd";
import moment from "moment";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoInfo } from "react-icons/go";

const { Item } = Form;

const staticUsers = [
  {
    id: "1",
    fullName: "John Doe",
    accountID: "ACC123",
    email: "john.doe@example.com",
    phoneNumber: "1234567890",
    address_line1: "123 Main St",
    createdAt: "2023-05-01T10:00:00Z",
    imageUrl: null,
    status: "active",
    gender: "male",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    accountID: "ACC456",
    email: "jane.smith@example.com",
    phoneNumber: "0987654321",
    address_line1: "456 Park Ave",
    createdAt: "2023-04-28T09:30:00Z",
    imageUrl: null,
    status: "active",
    gender: "female",
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    accountID: "ACC789",
    email: "alice.johnson@example.com",
    phoneNumber: "1122334455",
    address_line1: "789 Broadway",
    createdAt: "2023-04-25T11:15:00Z",
    imageUrl: null,
    status: "inactive",
    gender: "female",
  },
  {
    id: "4",
    fullName: "Bob Williams",
    accountID: "ACC101",
    email: "bob.williams@example.com",
    phoneNumber: "6677889900",
    address_line1: "101 Center St",
    createdAt: "2023-04-22T15:45:00Z",
    imageUrl: null,
    status: "active",
    gender: "male",
  },
  {
    id: "5",
    fullName: "Emily Davis",
    accountID: "ACC202",
    email: "emily.davis@example.com",
    phoneNumber: "4455667788",
    address_line1: "202 Elm St",
    createdAt: "2023-04-20T14:00:00Z",
    imageUrl: null,
    status: "active",
    gender: "female",
  },
];

const Users = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(staticUsers);

  // Filter by searchText and selectedDate
  useEffect(() => {
    let filtered = staticUsers;

    if (searchText.trim() !== "") {
      const lowerSearch = searchText.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.fullName.toLowerCase().includes(lowerSearch) ||
          user.email.toLowerCase().includes(lowerSearch) ||
          user.phoneNumber.includes(searchText)
      );
    }

    if (selectedDate) {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      filtered = filtered.filter(
        (user) => moment(user.createdAt).format("YYYY-MM-DD") === formattedDate
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset page when filter changes
  }, [searchText, selectedDate]);

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "Full Name", dataIndex: "fullName", key: "fullName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
    {
      title: "Joined Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => moment(date).format("DD MMM YYYY"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Link to={`/users/${record.id}`}>
          <GoInfo className="text-2xl" />
        </Link>
      ),
    },
  ];

  return (
    <section>
      <div className="md:flex justify-between items-center py-6 mb-4">
        <Link to={"/"} className="text-2xl flex items-center">
          <FaAngleLeft /> Users List
        </Link>
        <Form layout="inline" className="flex space-x-4">
          <Item name="date">
            <DatePicker
              className="rounded-md border border-[#92b8c0]"
              onChange={(date) => setSelectedDate(date)}
              placeholder="Select Date"
              allowClear
            />
          </Item>
          <Item name="username">
            <Input
              className="rounded-md w-[70%] md:w-full border border-[#92b8c0]"
              placeholder="User Name, Email or Phone"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </Item>
          <Item>
            <button
              type="button"
              className="size-8 rounded-full flex justify-center items-center bg-[#92b8c0] text-black"
              onClick={() => {
                /* optional search button action if needed */
              }}
            >
              <IoIosSearch className="size-5" />
            </button>
          </Item>
        </Form>
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
          pagination={{
            position: ["bottomCenter"],
            current: currentPage,
            pageSize: 10,
            onChange: setCurrentPage,
          }}
          scroll={{ x: "max-content" }}
          responsive={true}
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          loading={false}
        />
      </ConfigProvider>
    </section>
  );
};

export default Users;
