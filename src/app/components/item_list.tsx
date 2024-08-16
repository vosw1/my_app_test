import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faWrench,
  faWifi,
  faMobileAlt,
  faBriefcase,
  faCar,
  faCoffee,
  faUtensils,
  faBuilding,  
  faShieldAlt  
} from '@fortawesome/free-solid-svg-icons';
import styles from './item_list.module.css'; 

const items = [
  { icon: <FontAwesomeIcon icon={faTruck} />, text: '이사/청소', href: '/moving-cleaning' },
  { icon: <FontAwesomeIcon icon={faWrench} />, text: '설치/수리', href: '/installation-repair' },
  { icon: <FontAwesomeIcon icon={faWifi} />, text: '인터넷 가입', href: '/internet' },
  { icon: <FontAwesomeIcon icon={faMobileAlt} />, text: '모바일', href: '/mobile' },
  { icon: <FontAwesomeIcon icon={faBuilding} />, text: '부동산', href: '/real-estate' },
  { icon: <FontAwesomeIcon icon={faBriefcase} />, text: '외주', href: '/outsourcing' },
  { icon: <FontAwesomeIcon icon={faCar} />, text: '자동차', href: '/car' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, text: '렌탈', href: '/rental' },
  { icon: <FontAwesomeIcon icon={faUtensils} />, text: '음식점', href: '/restaurant' },
  { icon: <FontAwesomeIcon icon={faShieldAlt} />, text: '보험', href: '/insurance' } 
];

const ItemList: React.FC = () => {
  return (
    <div className={styles.itemGrid}>
      {items.map((item, index) => (
        <a key={index} href={item.href} className={styles.itemLink}>
          <div className={styles.itemIcon}>
            {item.icon}
          </div>
          <div className={styles.itemText}>
            {item.text}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ItemList;
