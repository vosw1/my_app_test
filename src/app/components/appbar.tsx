"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './appbar.module.css';

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
      <Link href="/coupons">
        <img 
          src="/images/coupon.png" 
          alt="Coupon Icon" 
          className={styles.couponIcon}
        />
      </Link>

      {/* 지역 선택 버튼 */}
      <div className={styles.dropdownContainer}>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={styles.regionButton}
        >
          <div className={styles.regionText}>{selectedRegion}</div>
          <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.show : ''}`}>
          {regions.map(region => (
            <button
              key={region}
              onClick={() => handleRegionSelect(region)}
              className={`${styles.dropdownItem} ${region === selectedRegion ? styles.selectedDropdownItem : ''}`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
      
      {/* 알림 아이콘 */}
      <Link href="/notifications">
        <svg 
          className={styles.notificationIcon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.403-1.403C18.673 14.368 18 12.24 18 10V8a6 6 0 0 0-6-6A6 6 0 0 0 6 8v2c0 2.24-.673 4.368-1.597 5.597L3 17h5m0 0a3 3 0 0 0 6 0"></path>
        </svg>
      </Link>
    </header>
  );
};

export default AppBar;