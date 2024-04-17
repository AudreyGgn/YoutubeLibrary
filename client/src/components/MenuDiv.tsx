import React from 'react';
import Hello from './Hello';
import SearchInput from './SearchInput';
import VideosList from './VideosList';


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
    <div style={{ border: '2px solid red', borderRadius: '10px', width: '80%', height: '80%', padding: '20px' }}>
      <Hello userName={userName} />
      <SearchInput />
      <VideosList videos={videos} onDelete={() => {}} />
    </div>
  );
};

export default MenuDiv;
