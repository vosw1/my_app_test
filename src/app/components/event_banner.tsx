"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './event_banner.module.css'; // 스타일 파일

interface Banner {
  imageSrc: string;
  altText: string;
}

interface EventBannerProps {
  banners: Banner[];
}

const EventBanner: React.FC<EventBannerProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className={styles.bannerContainer}>
      <div
        className={styles.bannerWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className={styles.banner}>
            <Image
              src={banner.imageSrc}
              alt={banner.altText}
              layout="responsive"
              width={1200}
              height={400}
              className={styles.bannerImage}
            />
          </div>
        ))}
      </div>
      <div className={styles.bannerFooter}>
        <span className={styles.pageInfo}>
          {currentIndex + 1}/{banners.length}
        </span>
        <button
          className={styles.nextButton}
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EventBanner;