"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // 아이콘 임포트
import styles from './footer.module.css'; // CSS 모듈 임포트

const Footer: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'terms' | 'privacy' | 'business' | null>(null);
  const [showBusinessInfo, setShowBusinessInfo] = useState(false);

  // 사업자 정보 표시/숨기기 토글 함수
  const toggleBusinessInfo = () => {
    setShowBusinessInfo(!showBusinessInfo);
  };

  return (
    <footer className={`text-center py-4 mt-4 border-t border-gray-200 ${styles.footer}`}>
      {/* 메뉴 버튼들 */}
      <div className={styles.buttonContainer}>
        <button onClick={() => setSelectedSection('terms')} className={styles.button}>이용약관</button>
        <button onClick={() => setSelectedSection('privacy')} className={styles.button}>개인정보처리방침</button>
        <button onClick={() => setSelectedSection('business')} className={styles.button}>사업자정보</button>
      </div>

      {/* 선택된 내용 */}
      <div className={`px-4 py-6 bg-white border border-gray-300 rounded-lg mx-2 ${styles.textContent}`}>
        {selectedSection === 'terms' && <p className={styles.textContent}>이용약관 내용이 여기에 표시됩니다.</p>}
        {selectedSection === 'privacy' && (
          <p className={styles.privacyText}>
            차자스는 통신판매중개사로 거래 당사자가 아니므로, 판매자가 등록한 상품 정보 및 거래 등에 대해 책임을 지지 않습니다. 단, 차자스가 판매자로 등록하여 판매한 판매자에 대해서는 책임을 부담합니다.
          </p>
        )}
        {selectedSection === 'business' && (
          <p className={styles.textContent}>사업자 정보 내용이 여기에 표시됩니다.</p>
        )}
      </div>

      {/* 차자스 사업자 정보 버튼과 내용 */}
      <div className="text-center mt-4">
        <button
          onClick={toggleBusinessInfo}
          className={styles.toggleButton}
        >
          차자스 사업자 정보
          {showBusinessInfo ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
        </button>
        {showBusinessInfo && (
          <div className={styles.businessInfoContent}>
            <table>
              <tbody>
                <tr>
                  <td className={styles.label}>상호</td>
                  <td className={styles.value}>차자스</td>
                </tr>
                <tr>
                  <td className={styles.label}>대표자</td>
                  <td className={styles.value}>김민석</td>
                </tr>
                <tr>
                  <td className={styles.label}>주소</td>
                  <td className={styles.value}>부산광역시 북구 만덕대로 134</td>
                </tr>
                <tr>
                  <td className={styles.label}>사업자등록번호</td>
                  <td className={styles.value}>123-45-67890</td>
                </tr>
                <tr>
                  <td className={styles.label}>통신판매업신고</td>
                  <td className={styles.value}>제0000-땡땡땡땡-1234호</td>
                </tr>
                <tr>
                  <td className={styles.label}>포스팅사업자</td>
                  <td className={styles.value}>땡땡</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;