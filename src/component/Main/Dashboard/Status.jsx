import { FaDatabase } from "react-icons/fa";
import { PiCurrencyCircleDollar, PiUsers, PiUsersThreeFill } from "react-icons/pi";
import { useGetDashboardStatusQuery } from "../../../redux/features/dashboard/dashboardApi";
const Status = () => {
  const { data, isLoading } = useGetDashboardStatusQuery();



  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="flex items-center gap-5 p-5 rounded-lg border-2 border-gray-200">
        <div className=" ">
          {/* <PiUsersThreeFill className="size-10" /> */}
          <img className="w-16" src="/Home/icon.png" alt="" />
        </div>
        <div className="space-y-2">
          <h1>Total User</h1>
          <h1 className="text-4xl font-semibold text-[#222222]">
            {data?.totalNumberOfUser || "0"}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 rounded-lg border-2 border-gray-200">
        <div className=" ">
          {/* <PiUsersThreeFill className="size-10" /> */}
          <img className="w-16" src="/Home/icon.png" alt="" />
        </div>
        <div className="space-y-2">
          <h1>Total  Challenges</h1>
          <h1 className="text-4xl font-semibold text-[#222222]">
            {data?.totalNumberOfUser || "0"}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 rounded-lg border-2 border-gray-200">
        <div className=" ">
          {/* <PiUsersThreeFill className="size-10" /> */}
          <img className="w-16" src="/Home/icon.png" alt="" />
        </div>
        <div className="space-y-2">
          <h1>Total Events</h1>
          <h1 className="text-4xl font-semibold text-[#222222]">
            {data?.totalNumberOfUser || "0"}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 rounded-lg border-2 border-gray-200">
        <div className=" ">
          {/* <PiUsersThreeFill className="size-10" /> */}
          <img className="w-16" src="/Home/icon.png" alt="" />
        </div>
        <div className="space-y-2">
          <h1>Total Revenue</h1>
          <h1 className="text-4xl font-semibold text-[#222222]">
            {data?.totalNumberOfUser || "0"}
          </h1>
        </div>
      </div>

    </div>
  );
};

export default Status;
