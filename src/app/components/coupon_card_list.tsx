import React from 'react';
import CouponCard from './coupon_card'; 
import styles from './coupon_card_list.module.css';

interface CouponCardListProps {
  coupons: {
    topImageSrc: string;
    clipImageSrc: string;
    userName: string;
    category: string;
    offerText: string;
    expirationDate: string;
    remainingCount?: number;
    condition: '리뷰작성 시' | '구매 시';
    status: 'available' | 'claimed' | 'expired';
  }[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CouponCardList: React.FC<CouponCardListProps> = ({
  coupons,
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className={styles.gridContainer}> {/* CSS 모듈에서 새로운 클래스 이름 사용 */}
        {coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            topImageSrc={coupon.topImageSrc}
            clipImageSrc={coupon.clipImageSrc}
            userName={coupon.userName}
            category={coupon.category}
            offerText={coupon.offerText}
            expirationDate={coupon.expirationDate}
            remainingCount={coupon.remainingCount}
            condition={coupon.condition}
            status={coupon.status}
          />
        ))}
      </div>

      {/* 페이지 네비게이션 */}
      <div className="mt-8 flex justify-center items-center space-x-4">
        {/* 이전 페이지 버튼 */}
        <button
          className={`text-blue-500 hover:text-blue-700 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; {/* '<' 아이콘 */}
        </button>
        <span className="text-gray-500">{currentPage}/{totalPages}</span> {/* 현재 페이지 / 총 페이지 수 */}
        {/* 다음 페이지 버튼 */}
        <button
          className={`text-blue-500 hover:text-blue-700 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt; {/* '>' 아이콘 */}
        </button>
      </div>
    </div>
  );
};

export default CouponCardList;