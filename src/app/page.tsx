import React from 'react';
import Footer from './components/footer';
import BottomNav from './components/bottom_nav';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-full">

      {/* 글자 */}
      <div className="mb-4">
        <p className="text-lg font-semibold">여기는 페이지 내용입니다.</p>
      </div>

      {/* 이미지 카드 + 버튼 */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">이미지 카드 제목</h2>
            <p className="text-gray-600 mb-4">이미지 카드 설명입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;