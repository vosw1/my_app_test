"use client"

import React, { useState } from 'react';
import ItemList from './components/item_list';
import EventBanner from './components/event_banner';
import CouponCardList from './components/coupon_card_list';

const banners = [
  { imageSrc: '/images/banner1.png', altText: 'Banner 1' },
  { imageSrc: '/images/banner1.png', altText: 'Banner 2' },
  { imageSrc: '/images/banner1.png', altText: 'Banner 3' },
];

const coupons = [
  {
    topImageSrc: '/images/coupon1.png',
    clipImageSrc: '/images/user1.png',
    userName: '하우스멜',
    category: '카페 디저트',
    offerText: '소금빵 증정',
    expirationDate: '2024년 05월 31일까지',
    condition: '리뷰작성 시',
    status: 'available',
  },
  {
    topImageSrc: '/images/coupon2.png',
    clipImageSrc: '/images/user2.png',
    userName: '잭슨피자 광안리점',
    category: '피자',
    offerText: '오븐스파게티 증정',
    expirationDate: '2024년 06월 30일까지',
    remainingCount: 25,
    condition: '리뷰작성 시',
    status: 'claimed',
  },
  {
    topImageSrc: '/images/coupon3.png',
    clipImageSrc: '/images/user2.png',
    userName: '오만원더통신할인센터',
    category: '인터넷가입',
    offerText: '사은품 추가 증정',
    expirationDate: '2024년 05월 31일까지',
    remainingCount: 5,
    condition: '리뷰작성 시',
    status: 'available',
  },
  {
    topImageSrc: '/images/coupon4.png',
    clipImageSrc: '/images/user2.png',
    userName: '이가요리족보야',
    category: '족발 보쌈',
    offerText: '탄산음료 1병 무료',
    expirationDate: '2024년 05월 31일까지',
    condition: '구매 시',
    status: 'available',
  },
  // {
  //   topImageSrc: '/images/coupon4.png',
  //   clipImageSrc: '/images/user2.png',
  //   userName: '이가요리족보야',
  //   category: '족발 보쌈',
  //   offerText: '탄산음료 1병 무료',
  //   expirationDate: '2024년 05월 31일까지',
  //   condition: '구매 시',
  //   status: 'available',
  // },
  // {
  //   topImageSrc: '/images/coupon3.png',
  //   clipImageSrc: '/images/user2.png',
  //   userName: '오만원더통신할인센터',
  //   category: '인터넷가입',
  //   offerText: '사은품 추가 증정',
  //   expirationDate: '2024년 05월 31일까지',
  //   remainingCount: 5,
  //   condition: '리뷰작성 시',
  //   status: 'available',
  // },
  // {
  //   topImageSrc: '/images/coupon3.png',
  //   clipImageSrc: '/images/user2.png',
  //   userName: '오만원더통신할인센터',
  //   category: '인터넷가입',
  //   offerText: '사은품 추가 증정',
  //   expirationDate: '2024년 05월 31일까지',
  //   remainingCount: 5,
  //   condition: '리뷰작성 시',
  //   status: 'available',
  // },
  // {
  //   topImageSrc: '/images/coupon4.png',
  //   clipImageSrc: '/images/user2.png',
  //   userName: '이가요리족보야',
  //   category: '족발 보쌈',
  //   offerText: '탄산음료 1병 무료',
  //   expirationDate: '2024년 05월 31일까지',
  //   condition: '구매 시',
  //   status: 'available',
  // },
  // {
  //   topImageSrc: '/images/coupon4.png',
  //   clipImageSrc: '/images/user2.png',
  //   userName: '이가요리족보야',
  //   category: '족발 보쌈',
  //   offerText: '탄산음료 1병 무료',
  //   expirationDate: '2024년 05월 31일까지',
  //   condition: '구매 시',
  //   status: 'available',
  // },
  // {
  //   topImageSrc: '/images/coupon3.png',
  //   clipImageSrc: '/images/user2.png',
  //   userName: '오만원더통신할인센터',
  //   category: '인터넷가입',
  //   offerText: '사은품 추가 증정',
  //   expirationDate: '2024년 05월 31일까지',
  //   remainingCount: 5,
  //   condition: '리뷰작성 시',
  //   status: 'available',
  // },
];

const itemsPerPage = 4; // 페이지당 아이템 수

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(coupons.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentCoupons = coupons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col p-4">
        <ItemList />
        {/* 이벤트 배너 */}
        <EventBanner banners={banners} />

        {/* 인기 쿠폰 */}
        <h1 style={{ paddingTop: '40px', paddingLeft:'15px'}} className="text-2xl font-bold">인기 쿠폰</h1>
        <CouponCardList
          coupons={currentCoupons}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      {/* 푸터 */}
      <footer />
    </div>
  );
}
