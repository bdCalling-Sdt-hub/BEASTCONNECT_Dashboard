/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoBagHandleSharp, IoSettingsSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/public/logo/dashboard_log.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/features/auth/authSlice";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBriefcase, FaCopy, FaUserAlt, FaUsers } from "react-icons/fa";
import { MdDashboard, MdOutlineContactPage } from "react-icons/md";
// import { GiLightBulb } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { FaRegMoneyBill1, FaSackDollar } from "react-icons/fa6";
import { GoDeviceCameraVideo, GoHomeFill } from "react-icons/go";
import { GrDocumentImage } from "react-icons/gr";
import { GiLoveMystery, GiLovers } from "react-icons/gi";
import { CiDollar } from "react-icons/ci";
import { AiFillCrown } from "react-icons/ai";
import { TiInfoOutline } from "react-icons/ti";

const sidebarItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard className="size-6" />,
  },
  {
    path: "/users",
    name: "User",
    icon: <FaUserAlt className="size-6" />,
  },

  {
    path: "/challenges",
    name: "Challenges",
    icon: <FaUsers className="size-6" />,
  },
  {
    path: "/connection",
    name: "Connection",
    icon: <GiLoveMystery className="size-6" />,
  },
  {
    path: "/event",
    name: "Events",
    icon: <GiLovers className="size-6" />,
  },



  {
    path: "/video-schedule",
    name: "Video schedule",
    icon: <GoDeviceCameraVideo className="size-5" />,
  },

  {
    path: "/earnings",
    name: "Earnings ",
    icon: <CiDollar className="size-6" />,
  },
  {
    path: "/subscription",
    name: "Subscription ",
    icon: <AiFillCrown className="size-6" />,
  },
  {
    path: "/user-report",
    name: "Reports ",
    icon: <TiInfoOutline className="size-6" />,
  },



  // {
  //   path: "/user-request",
  //   name: "Super User Request",
  //   icon: <FaBriefcase className="size-6" />,
  // },
  // {
  //   path: "/allevent",
  //   name: "All Tournament",
  //   icon: <FaBriefcase className="size-6" />,
  // },
  // {
  //   path: "/subscription",
  //   name: "Subscription",
  //   icon: <FaCopy className="size-6" />,
  // },
  // {
  //   path: "/earnings",
  //   name: "Earnings",
  //   icon: <FaSackDollar className="size-6" />,
  // },
  // {
  //   path: "/suggestion",
  //   name: "Suggestion",
  //   icon: <HiLightBulb className="size-8" />,
  // },
  // {
  //   path: "/Donation",
  //   name: "Donation",
  //   icon: <RiMoneyDollarCircleFill className="size-6" />,
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsSharp className="size-6" />,
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden border-r-4 border-white overflow-y-auto md:block w-full md:w-[200px] lg:w-[250px] xl:w-[280px] h-full bg-gradient-to-t from-[#ff924f] to-[#80d6f9] fixed ">
        <Link to={"/"} className="flex flex-col justify-center items-center pt-5 gap-2  mb-10">
          <img src={logo} alt="logo" className="w-[100px] mb-5 " />
        </Link>
        <ul className="flex flex-col gap-5">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-[80%] mx-auto px-5 py-2 flex justify-start items-center gap-3 rounded-full ${isActive ? "bg-[#02aef4] !text-white " : "text-black"
                }`
              }
            >
              {item?.icon}
              <h>{item.name}</h>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center border-2 border-white gap-1 font-bold px-16 rounded-full py-2 text-black  ml-6 mt-5"
        >
          <IoIosLogOut className="size-8  p-1 text-red-500 rounded-md" />
          <span className="text-white">Logout</span>
        </button>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 overflow-y-auto left-0 z-40 w-64 h-full bg-[#02aef4] shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col justify-center items-center pt-5 gap-2 ">
          <img src={logo} alt="logo" className="h-20 mb-5" />
        </div>
        <ul className="flex flex-col gap-3 mt-10">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar} // Close sidebar on link click
              className={({ isActive }) =>
                `w-[70%] mx-auto px-5 py-2 flex items-center gap-3 text-white ${isActive ? "bg-[#02aef4] " : ""
                }`
              }
            >
              {item?.icon}
              <h>{item.name}</h>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => {
            setShowModal(true);
            toggleSidebar();
          }}
          className="flex items-center gap-2 border-2 border-white px-10 ml-5 mt-5"
        >
          <IoIosLogOut className="size-8  p-1 text-red-500 rounded-md" />
          <span className="text-black">Logout</span>
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Confirm Logout</h3>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
