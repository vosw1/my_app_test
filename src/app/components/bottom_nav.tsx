import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <nav className="flex justify-around">
        <a href="#" className="hover:underline">홈</a>
        <a href="#" className="hover:underline">요청 내역</a>
        <a href="#" className="hover:underline">채팅</a>
        <a href="#" className="hover:underline">내 정보</a>
      </nav>
    </footer>
  );
};

export default BottomNav;