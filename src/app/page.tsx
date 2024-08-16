import React from 'react';
import Footer from './components/footer';
import BottomNav from './components/bottom_nav';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* 검색바 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="검색..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* 아이콘들 */}
      <div className="flex justify-around mb-4">
        <div className="p-2 bg-gray-200 rounded-full">아이콘1</div>
        <div className="p-2 bg-gray-200 rounded-full">아이콘2</div>
        <div className="p-2 bg-gray-200 rounded-full">아이콘3</div>
      </div>

      {/* 페이지 넘기기 */}
      <div className="flex justify-between items-center mb-4">
        <button className="p-2 bg-blue-600 text-white rounded">이전</button>
        <button className="p-2 bg-blue-600 text-white rounded">다음</button>
      </div>

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
            <button className="w-full bg-blue-600 text-white py-2 rounded">버튼</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
