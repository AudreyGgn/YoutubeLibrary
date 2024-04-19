import React from 'react';
import Hello from './Hello';
import SearchInput from './SearchInput';
import VideosList from './VideosList';
import './menuDiv.css';

interface Video {
  id: string;
  title: string;
}

interface MenuDivProps {
  userName: string;
  videos: Video[];
}

const MenuDiv: React.FC<MenuDivProps> = ({ userName, videos }) => {
  return (
    <div className="menuDiv">
      <Hello userName={userName} />
      <SearchInput />
      <VideosList videos={videos} userName={userName} onDelete={() => {}} />
    </div>
  );
};

export default MenuDiv;
