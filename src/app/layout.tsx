import React from 'react';
import BottomNav from './components/bottom_nav';
import Footer from './components/footer';
import AppBar from './components/appbar';
import SearchBar from './components/search';

// Layout 컴포넌트는 전체 애플리케이션의 레이아웃을 정의합니다.
// children 프로퍼티를 통해 콘텐츠를 삽입할 수 있습니다.
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen font-sans">
        {/* 컨테이너는 최대 폭을 제한하고 중앙에 정렬합니다 */}
        <div className="container mx-auto">
          {/* 앱바 */}
          <AppBar />
          {/* 검색바 */}
          <SearchBar />
          
          {/* 메인 콘텐츠 */}
          <main className="flex-1 flex flex-col p-4">
            {children}
          </main>
    
          {/* 바텀 네비게이션 */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
};

export default Layout;
