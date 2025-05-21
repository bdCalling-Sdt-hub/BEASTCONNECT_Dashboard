import { Pagination } from "antd";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import moment from "moment";

const staticNotifications = [
  {
    id: 1,
    message: "Your order #1234 has been shipped.",
    createdAt: "2025-05-20T10:30:00Z",
  },
  {
    id: 2,
    message: "New comment on your post.",
    createdAt: "2025-05-19T15:45:00Z",
  },
  {
    id: 3,
    message: "Password changed successfully.",
    createdAt: "2025-05-18T08:00:00Z",
  },
  {
    id: 4,
    message: "Your subscription will expire soon.",
    createdAt: "2025-05-17T12:20:00Z",
  },
  {
    id: 5,
    message: "You have a new follower.",
    createdAt: "2025-05-16T14:50:00Z",
  },
  {
    id: 6,
    message: "Welcome to our platform!",
    createdAt: "2025-05-15T09:10:00Z",
  },
  {
    id: 7,
    message: "Update your profile for better recommendations.",
    createdAt: "2025-05-14T11:30:00Z",
  },
  {
    id: 8,
    message: "Your payment was processed successfully.",
    createdAt: "2025-05-13T17:25:00Z",
  },
  {
    id: 9,
    message: "New features are available in your dashboard.",
    createdAt: "2025-05-12T20:15:00Z",
  },
  {
    id: 10,
    message: "You have unread messages.",
    createdAt: "2025-05-11T13:40:00Z",
  },
];

const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5; // smaller page size for demo

  // Pagination Logic
  const paginatedNotifications = staticNotifications.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <Link to={"/"} className="text-2xl flex items-center mb-4">
        <FaAngleLeft /> Notification
      </Link>

      <div className="space-y-2">
        {paginatedNotifications.map((item) => (
          <div
            key={item.id}
            className="border border-[#02aef4] hover:bg-[#02aff43a] cursor-pointer rounded-md p-4 flex items-center space-x-4"
          >
            <div className="text-[#02aef4] border border-[#02aef4] rounded-full p-2 relative">
              <span className="bg-[#02aef4] p-1.5 rounded-full absolute ml-4 z-20"></span>
              <IoMdNotificationsOutline size={30} className="relative" />
            </div>
            <div>
              <p className="font-semibold">{item.message}</p>
              <p className="text-gray-500">{moment(item.createdAt).fromNow()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centering the Pagination */}
      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          total={staticNotifications.length}
          pageSize={pageSize}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Notification;
