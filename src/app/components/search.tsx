import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './search.module.css'; // CSS 모듈 임포트

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = '쿠폰과 견적은 차자스에서!' }) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInner}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder={placeholder}
          aria-label={placeholder} // 접근성을 위한 aria-label
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;