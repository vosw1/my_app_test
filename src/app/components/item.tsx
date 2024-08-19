import React from 'react';
import Link from 'next/link';
import styles from './item_list.module.css';

interface ItemProps {
  icon: React.ReactElement;
  text: string;
  href: string;
}

const Item: React.FC<ItemProps> = ({ icon, text, href }) => {
  return (
    <Link href={href} className={styles.itemLink}>
      <div className={styles.itemIcon}>
        {icon}
      </div>
      <div className={styles.itemText}>
        {text}
      </div>
    </Link>
  );
};

export default Item;
