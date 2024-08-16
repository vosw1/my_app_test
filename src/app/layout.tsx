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
      <body className="flex flex-col min-h-screen font-sans">
        <div className="flex flex-col min-h-screen">
          <AppBar />
          <SearchBar />

          <main className="flex-1 p-4 overflow-auto">
            {children}
          </main>

          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  );
};

export default Layout;