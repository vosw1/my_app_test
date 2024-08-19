'use client'

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
    <header className={`flex justify-between items-center p-4 bg-white text-gray-800 relative ${styles.appbar}`}>
      {/* 쿠폰 아이콘 */}
      <img 
        src="/images/coupon.png" 
        alt="Coupon Icon" 
        className={`w-24 h-auto ${styles.couponIcon}`} 
      />

      {/* 지역 선택 버튼 */}
      <div className={`relative ${styles.dropdownContainer}`}>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={`flex items-center p-2 px-4 bg-white border border-white rounded-md cursor-pointer whitespace-nowrap ${styles.regionButton}`}
        >
          <div className={`text-2xl font-bold mr-2 ${styles.regionText}`}>{selectedRegion}</div>
          <svg className={`w-6 h-6 stroke-gray-800 ${styles.dropdownIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute w-1/5 bg-white border border-white rounded-md shadow-md max-h-72 overflow-y-auto ${styles.dropdownMenu}`}>
          {regions.map(region => (
            <button
              key={region}
              onClick={() => handleRegionSelect(region)}
              className={`text-2xl block w-full text-left py-2 px-4 cursor-pointer ${region === selectedRegion ? 'bg-blue-100' : 'bg-white'} ${styles.dropdownItem}`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
      
      {/* 알림 아이콘 */}
      <svg 
        className={`w-12 h-auto ${styles.notificationIcon}`} 
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