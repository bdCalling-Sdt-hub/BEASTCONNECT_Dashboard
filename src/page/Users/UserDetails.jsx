import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { ConfigProvider, Table, Modal } from "antd";
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

// Static data for each category
const createChallengesData = [
  {
    id: "cc1",
    challengeName: "Code Sprint 2023",
    percipient: "John Doe",
    winner: "Alice Johnson",
    date: "2023-04-20",
    description: "An intense sprint challenge to code fast and clean.",
    location: "Online",
  },
  {
    id: "cc2",
    challengeName: "Hackathon May",
    percipient: "John Doe",
    winner: "Bob Williams",
    date: "2023-05-01",
    description: "A month-long hackathon focused on fintech solutions.",
    location: "New York",
  },
];

const joinChallengesData = [
  {
    id: "jc1",
    challengeName: "Bug Bash",
    percipient: "Michael Brown",
    winner: "Jane Smith",
    date: "2023-03-15",
    description: "Finding and fixing bugs in legacy systems.",
    location: "San Francisco",
  },
];

const createEventData = [
  {
    id: "ce1",
    challengeName: "Annual Dev Meetup",
    percipient: "John Doe",
    winner: "N/A",
    date: "2023-09-10",
    description: "Annual gathering of developers.",
    location: "Los Angeles",
  },
];

const joinEventData = [
  {
    id: "je1",
    challengeName: "Tech Conference 2023",
    percipient: "John Doe",
    winner: "N/A",
    date: "2023-11-05",
    description: "Industry-leading tech conference.",
    location: "Chicago",
  },
];

const UserDetails = () => {
  const [userDataFull] = useState(staticUserData);

  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  // Section toggle state
  const [activeSection, setActiveSection] = useState(null); // "createChallenges", "joinChallenges", "createEvent", "joinEvent"

  const showModal = (record) => {
    setSelectedChallenge(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedChallenge(null);
  };

  // Columns stay same for all categories, you can customize if needed
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
        <button onClick={() => showModal(record)} aria-label="View Details">
          <IoEyeOutline className="text-2xl " />
        </button>
      ),
    },
  ];

  // Get data source & title based on active section
  let dataSource = [];
  let tableTitle = "";

  switch (activeSection) {
    case "createChallenges":
      dataSource = createChallengesData;
      tableTitle = "Create Challenges";
      break;
    case "joinChallenges":
      dataSource = joinChallengesData;
      tableTitle = "Join Challenges";
      break;
    case "createEvent":
      dataSource = createEventData;
      tableTitle = "Create Event";
      break;
    case "joinEvent":
      dataSource = joinEventData;
      tableTitle = "Join Event";
      break;
    default:
      dataSource = [];
      tableTitle = "";
  }

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

          <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042] cursor-pointer" onClick={() => setActiveSection("createChallenges")}>
            <span className="font-semibold">Create Challenges</span>
            <span className="flex items-center gap-1">
              {createChallengesData.length.toString().padStart(2, "0")} <FaChevronRight />
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042] cursor-pointer" onClick={() => setActiveSection("joinChallenges")}>
            <span className="font-semibold">Join Challenges</span>
            <span className="flex items-center gap-1">
              {joinChallengesData.length.toString().padStart(2, "0")} <FaChevronRight />
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042] cursor-pointer" onClick={() => setActiveSection("createEvent")}>
            <span className="font-semibold">Create Event</span>
            <span className="flex items-center gap-1">
              {createEventData.length.toString().padStart(2, "0")} <FaChevronRight />
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b-2 border-[#00000042] cursor-pointer" onClick={() => setActiveSection("joinEvent")}>
            <span className="font-semibold">Join Event</span>
            <span className="flex items-center gap-1">
              {joinEventData.length.toString().padStart(2, "0")} <FaChevronRight />
            </span>
          </div>
        </div>
      </div>

      {/* Conditionally render the table only when a section is active */}
      {
        activeSection && (
          <div>
            <h2 className="text-2xl font-semibold mb-5">{tableTitle}</h2>
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
                rowKey="id"
                pagination={{ pageSize: 5 }}
                bordered
              />
            </ConfigProvider>
          </div>
        )
      }

      {/* Modal for Challenge Details */}
      <Modal
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        {selectedChallenge && (
          <div className="space-y-3">
            <p>
              <strong>Challenge Name:</strong> {selectedChallenge.challengeName}
            </p>
            <p>
              <strong>Percipient:</strong> {selectedChallenge.percipient}
            </p>
            <p>
              <strong>Winner:</strong> {selectedChallenge.winner}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedChallenge.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Description:</strong> {selectedChallenge.description}
            </p>
            <p>
              <strong>Location:</strong> {selectedChallenge.location}
            </p>
          </div>
        )}
      </Modal>
    </div >
  );
};

export default UserDetails;
