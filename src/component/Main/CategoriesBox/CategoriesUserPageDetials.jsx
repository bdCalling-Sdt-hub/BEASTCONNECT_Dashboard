import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoriesUserPageDetials = () => {
    // Sample static user data — replace with props or API data as needed
    const user = {
        name: 'Afsana hamid mim',
        email: 'demo@gmail.com',
        dob: '1 Jul 2004',
        phone: '55555555555555',
        joiningDate: '16 Dec 2024',
        address: 'New York, US',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    };

    return (
        <div className='p-5'>
            <Link to={'/connection'} className="flex items-center text-2xl gap-3 mb-6 cursor-pointer text-gray-700" >
                <span className="text-2xl"><FaChevronLeft /></span> User Details
            </Link>
            <div className="max-w-2xl my-10 mx-auto p-6 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                <div className="flex items-center mb-6 gap-4">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <h1 className="text-2xl font-semibold">{user.name}</h1>
                </div>

                <div className="space-y-4 text-gray-700 text-base">
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold">Name</span>
                        <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold">Email</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold">Date of Birth</span>
                        <span>{user.dob}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold">Phone number</span>
                        <span>{user.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold">Joining date</span>
                        <span>{user.joiningDate}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold">Address</span>
                        <span>{user.address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesUserPageDetials;
