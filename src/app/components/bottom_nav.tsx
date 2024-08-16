import React from 'react';
import { FaHome, FaList, FaCommentDots, FaUser } from 'react-icons/fa';

const BottomNav: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-screen-lg mx-auto flex justify-around items-center">
        <a href="#" className="flex flex-col items-center hover:underline">
          <FaHome className="text-2xl mb-1" />
          <div>홈</div>
        </a>
        <a href="#" className="flex flex-col items-center hover:underline">
          <FaList className="text-2xl mb-1" />
          <div>요청 내역</div>
        </a>
        <a href="#" className="flex flex-col items-center hover:underline">
          <FaCommentDots className="text-2xl mb-1" />
          <div>채팅</div>
        </a>
        <a href="#" className="flex flex-col items-center hover:underline">
          <FaUser className="text-2xl mb-1" />
          <div>내 정보</div>
        </a>
      </div>
    </footer>
  );
};

export default BottomNav;
