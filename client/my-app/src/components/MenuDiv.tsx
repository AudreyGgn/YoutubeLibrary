import React from 'react';
import Hello from './Hello';
import SearchInput from './SearchInput';
import VideosList from './VideosList';

// Définir le type d'objet vidéo
interface Video {
  id: string;
  title: string;
}

// Propriétés du composant MenuDiv
interface MenuDivProps {
  userName: string;
  videos: Video[]; // Déclarer videos comme un tableau d'objets vidéo
}

const MenuDiv: React.FC<MenuDivProps> = ({ userName, videos }) => {
  return (
    <div style={{ border: '2px solid red', borderRadius: '10px', width: '75%', height: '50vh', padding: '20px' }}>
      <Hello userName={userName} />
      <SearchInput />
      {/* Passer les vidéos en tant que prop à VideosList */}
      <VideosList videos={videos}/>
    </div>
  );
};

export default MenuDiv;
