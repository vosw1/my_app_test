import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './search.module.css'; // 기존 CSS 모듈 임포트

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = '쿠폰과 견적은 차자스에서!' }) => {
  return (
    <div className={`relative w-full max-w-2xl ${styles.searchContainer}`}>
      <div className={`flex items-center p-4 w-full ${styles.searchInner}`}>
        <FaSearch className={`text-gray-400 text-5xl ml-3 ${styles.searchIcon}`} />
        <input
          type="text"
          placeholder={placeholder}
          aria-label={placeholder} // 접근성을 위한 aria-label
          className={`w-full py-4 pl-5 text-xl text-gray-400 border-none rounded-lg outline-none focus:border-blue-800 focus:ring-0 ${styles.searchInput}`}
        />
      </div>
    </div>
  );
};

export default SearchBar;