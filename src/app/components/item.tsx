import Link from 'next/link';
import React from 'react';

interface ItemProps {
  icon: React.ReactElement;
  text: string;
  href: string;
}

const Item: React.FC<ItemProps> = ({ icon, text, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-4 hover:bg-gray-700 text-white"
    >
      <div style={{ fontSize: '60px' }} className="flex items-center justify-center mb-2">
        {icon}
      </div>
      <div style={{ fontSize: '30px' }} className="flex items-center justify-center">
        {text}
      </div>
    </Link>
  );
};

export default Item;
