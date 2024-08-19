'use client';

import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link'; 
import styles from './bottom_nav.module.css'; 

const BottomNav: React.FC = () => {
  return (
    <Box className={`${styles.bottomNav} flex justify-around items-center`}>
      {[
        { label: '홈', icon: <HomeOutlinedIcon className={`${styles.icon} text-gray-500`} />, href: '/' },
        { label: '요청 내역', icon: <AssignmentIcon className={`${styles.icon} text-gray-500`} />, href: '/requests' },
        { label: '채팅', icon: <ChatBubbleOutlineIcon className={`${styles.icon} text-gray-500`} />, href: '/chat' },
        { label: '내 정보', icon: <PersonIcon className={`${styles.icon} text-gray-500`} />, href: '/profile' }
      ].map((item) => (
        <Box key={item.label} className={styles.navItem}>
          <Link href={item.href} className="no-underline flex flex-col items-center">
            <IconButton aria-label={item.label} className={`${styles.icon} p-0 hover:text-blue-500`}>
              {item.icon}
            </IconButton>
            <Typography variant="caption" className={`${styles.text} hover:text-blue-500`}>
              {item.label}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default BottomNav;