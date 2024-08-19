"use client";

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'terms' | 'privacy' | 'business' | null>(null);
  const [showBusinessInfo, setShowBusinessInfo] = useState(false);

  const toggleBusinessInfo = () => {
    setShowBusinessInfo(!showBusinessInfo);
  };

  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-4">
      {/* 메뉴 텍스트 */}
      <div className="flex justify-center gap-10 mb-4">
        <button onClick={() => setSelectedSection('terms')} className="text-white hover:underline">이용약관</button>
        <button onClick={() => setSelectedSection('privacy')} className="text-white hover:underline">개인정보처리방침</button>
        <button onClick={() => setSelectedSection('business')} className="text-white hover:underline">사업자정보</button>
      </div>

      {/* 선택된 내용 */}
      <div className="text-center px-4 py-6 bg-white border border-gray-300 rounded-lg mx-2">
        {selectedSection === 'terms' && <p>이용약관 내용이 여기에 표시됩니다.</p>}
        {selectedSection === 'privacy' && <p>개인정보처리방침 내용이 여기에 표시됩니다.</p>}
        {selectedSection === 'business' && (
          <>
            <button
              onClick={toggleBusinessInfo}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 font-bold text-black"
            >
              사업자 정보
            </button>
            {showBusinessInfo && (
              <div className="mt-4 p-4 border border-gray-300 bg-white rounded-lg">
                <table className="w-full text-left">
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 font-semibold">상호</td>
                      <td className="py-2 px-4">차자스</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">대표자</td>
                      <td className="py-2 px-4">김민석</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">주소</td>
                      <td className="py-2 px-4">부산광역시 북구 만덕대로 134</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">사업자등록번호</td>
                      <td className="py-2 px-4">123-45-67890</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">통신판매업신고</td>
                      <td className="py-2 px-4">제0000-땡땡땡땡-1234호</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">포스팅사업자</td>
                      <td className="py-2 px-4">땡땡</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;