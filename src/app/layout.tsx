import React from 'react';
import BottomNav from './components/bottom_nav';
import Footer from './components/footer';
import AppBar from './components/appbar';
import SearchBar from './components/search';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <div className="flex flex-col min-h-screen">
          <AppBar />
          <main className="flex-1 p-4 overflow-auto main-content">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
};

export default Layout;