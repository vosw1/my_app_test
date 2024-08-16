"use client"

import { useState } from 'react';
import styles from './appbar.module.css'; // CSS 모듈 임포트

const regions = ['서울', '부산', '제주', '대구'];

const AppBar: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('부산');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setDropdownOpen(false);
  };

  return (
    <header className={styles.appbar}>
      {/* 쿠폰 아이콘 */}
      <img 
        src="/images/coupon.png" 
        alt="Coupon Icon" 
        className={styles.couponIcon} 
      />

      {/* 지역 선택 버튼 */}
      <div className="relative flex items-center">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={styles.regionButton}
        >
          <div className={styles.regionText}>{selectedRegion}</div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {regions.map(region => (
              <button
                key={region}
                onClick={() => handleRegionSelect(region)}
                className={styles.dropdownItem}
              >
                {region}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* 알림 아이콘 */}
      <svg 
        className={styles.notificationIcon} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.403-1.403C18.673 14.368 18 12.24 18 10V8a6 6 0 0 0-6-6A6 6 0 0 0 6 8v2c0 2.24-.673 4.368-1.597 5.597L3 17h5m0 0a3 3 0 0 0 6 0"></path>
      </svg>
    </header>
  );
};

export default AppBar;
