import React from 'react';
import ItemList from './components/item_list';
import EventBanner from './components/event_banner';
import Footer from './components/footer';

// 배너 데이터 정의
const banners = [
  { imageSrc: '/images/banner1.png', altText: 'Banner 1' },
  { imageSrc: '/images/banner1.png', altText: 'Banner 2' },
  { imageSrc: '/images/banner1.png', altText: 'Banner 3' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col p-4">
        <ItemList />
      
      {/* 이벤트 배너 */}
        <EventBanner banners={banners} />

        {/* 인기 쿠폰 */}
        <div className="mb-4">
          <h1 className="text-lg font-semibold">인기 쿠폰</h1>
        </div>
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
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
