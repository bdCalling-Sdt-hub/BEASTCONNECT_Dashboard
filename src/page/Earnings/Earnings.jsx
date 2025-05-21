import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Modal, Pagination } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { jsPDF } from "jspdf";

const staticEarningsData = [
  {
    id: "1",
    transactionId: "TX123456789",
    currency: "USD",
    amount: "150.00",
    status: "Completed",
    updatedAt: "2024-05-01T12:30:00Z",
    userName: "John Doe",
    location: "New York",
    date: "01 May 2024",
    subscriptionType: "Premium",
  },
  {
    id: "2",
    transactionId: "TX987654321",
    currency: "EUR",
    amount: "200.00",
    status: "Completed",
    updatedAt: "2024-05-03T15:45:00Z",
    userName: "Jane Smith",
    location: "London",
    date: "03 May 2024",
    subscriptionType: "Basic",
  },
  {
    id: "3",
    transactionId: "TX112233445",
    currency: "GBP",
    amount: "300.00",
    status: "Completed",
    updatedAt: "2024-05-05T09:20:00Z",
    userName: "Alice Johnson",
    location: "Paris",
    date: "05 May 2024",
    subscriptionType: "Standard",
  },
  // Add more sample records as needed
];

const Earnings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const [filteredEarnings, setFilteredEarnings] = useState(staticEarningsData);

  useEffect(() => {
    let filtered = staticEarningsData;

    if (searchText.trim() !== "") {
      filtered = filtered.filter((row) =>
        row.transactionId.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (searchDate.trim() !== "") {
      filtered = filtered.filter(
        (row) => row.updatedAt.split("T")[0] === searchDate
      );
    }

    setFilteredEarnings(filtered);
    setCurrentPage(1);
  }, [searchText, searchDate]);

  const paginatedData = filteredEarnings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const showModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    if (selectedTransaction) {
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Transaction Details", 14, 20);
      doc.setFontSize(12);

      const leftMargin = 10;
      const detailsStartY = 30;

      doc.rect(leftMargin, detailsStartY, 190, 100);
      doc.text(`Transaction ID: #${selectedTransaction.transactionId}`, leftMargin + 6, detailsStartY + 10);
      doc.text(`User Name: ${selectedTransaction.userName}`, leftMargin + 6, detailsStartY + 20);
      doc.text(`Subscription Type: ${selectedTransaction.subscriptionType}`, leftMargin + 6, detailsStartY + 30);
      doc.text(`Location: ${selectedTransaction.location}`, leftMargin + 6, detailsStartY + 40);
      doc.text(`Date: ${selectedTransaction.date}`, leftMargin + 6, detailsStartY + 50);
      doc.text(`Withdraw Amount: $${selectedTransaction.amount}`, leftMargin + 6, detailsStartY + 60);

      doc.save("transaction-details.pdf");
    }
  };

  return (
    <div className="w-full p-5 overflow-x-auto">
      <div className="w-full md:flex justify-between items-center py-6">
        <h1 className="text-2xl flex items-center">
          <FaAngleLeft /> Earnings
        </h1>
        <div className="flex items-center gap-2">
          <input
            type="date"
            className="border border-gray-300 px-4 py-2 rounded-md mr-2"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <input
            type="text"
            name="transactionId"
            className="border border-gray-300 px-4 py-2 rounded-md mr-2"
            placeholder="Search by Transaction ID"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="bg-[#02aef4] text-white w-10 h-10 flex items-center justify-center rounded-md ml-2">
            <IoSearchOutline />
          </button>
        </div>
      </div>

      <div>
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
              <tr key={row?.id} className="hover:bg-gray-50">
                <td className="border-gray-300 px-4 py-2">{(currentPage - 1) * pageSize + index + 1}</td>
                <td className="border-gray-300 px-4 py-2">{row?.userName}</td>
                <td className="border-gray-300 px-4 py-2">{row?.transactionId}</td>
                <td className="border-gray-300 px-4 py-2">${row?.amount}</td>
                <td className="border-gray-300 px-4 py-2">{row?.subscriptionType}</td>
                <td className="border-gray-300 px-4 py-2">
                  <div onClick={() => showModal(row)} className="cursor-pointer">
                    <HiOutlineDotsHorizontal className="text-2xl font-semibold" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredEarnings.length}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>

      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} width={600}>
        {selectedTransaction && (
          <div className="text-black">
            <h2 className="text-2xl font-semibold mb-4 text-center">Transaction Details</h2>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Transaction ID:</p>
              <p>{selectedTransaction?.transactionId}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">User Name:</p>
              <p>{selectedTransaction?.userName}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Subscription Type:</p>
              <p>{selectedTransaction?.subscriptionType}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Amount:</p>
              <p>${selectedTransaction?.amount}</p>
            </div>

          </div>
        )}
      </Modal>
    </div>
  );
};

export default Earnings;
