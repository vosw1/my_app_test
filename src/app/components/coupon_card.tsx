import React from 'react';
import Image from 'next/image';
import styles from './coupon.module.css'; 
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'; 

interface CouponCardProps {
  topImageSrc: string;
  clipImageSrc: string;
  userName: string;
  category: string;
  offerText: string;
  expirationDate: string;
  remainingCount?: number;
  condition: '리뷰작성 시' | '구매 시';
  status: 'available' | 'claimed' | 'expired';
}

const CouponCard = ({
  topImageSrc,
  clipImageSrc,
  userName,
  category,
  offerText,
  expirationDate,
  remainingCount,
  condition,
  status,
}: CouponCardProps) => {
  const isExpired = status === 'expired';
  const isClaimed = status === 'claimed';
  const isAvailable = status === 'available';

  const buttonText = isExpired
    ? '마감됨'
    : isClaimed
    ? '이미 받음'
    : '쿠폰받기';

  const buttonStyle = isExpired
    ? styles.buttonExpired
    : isClaimed
    ? styles.buttonClaimed
    : styles.buttonAvailable;

  return (
    <div className={styles.card}>
      {/* 상단 이미지 */}
      <div className={styles.topImageWrapper}>
        <Image
          src={topImageSrc}
          alt="Top Image"
          layout="fill"
          className={styles.topImage}
        />
      </div>

      {/* 클립 이미지, 사용자 이름, 분류 */}
      <div className={styles.session1}>
        <span className={styles.clipImageWrapper}>
          <Image
            src={clipImageSrc}
            alt="User Image"
            layout="fill"
            className={styles.clipImage}
          />
        </span>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.category}>{category}</p>
      </div>

      {/* 두 번째 세션 - 조건, 제공 내용, 남은 쿠폰 수, 유효 기간 */}
      <div className={styles.session2}>
      {/* 조건 */}
      <div className={styles.condition}>{condition}</div>

      {/* 제공 내용 */}
      <div className={styles.offerText}>{offerText}</div>

      <div className={styles.infoContainer}>
      {/* 남은 쿠폰 수가 있을 때 */}
      {remainingCount !== undefined ? (
      <div className={styles.remainingCount}>
      {remainingCount}장 남음 {expirationDate}
      </div>
      ) : (
    // 남은 쿠폰 수가 없을 때 유효 기간만 표시
    <div className={styles.expirationDate}>
      {expirationDate}
    </div>
  )}
</div>


</div>
      {/* 쿠폰 버튼 */}
      <button
        className={`${styles.button} ${buttonStyle}`}
        disabled={isExpired}
      >
        {!isClaimed && !isExpired && (
          <ArrowDownTrayIcon className={styles.buttonIcon} />
        )}
        {buttonText}
      </button>
    </div>
  );
};

export default CouponCard;