import React from 'react';

// Define the props interface for the Video component
interface VideoProps {
  id: string;
  title: string;
  onDelete: (id: string) => void; // Function to delete the video
}

const Video: React.FC<VideoProps> = ({ id, title, onDelete }) => {
  
  // Handle video deletion
  const handleDelete = () => {
    onDelete(id);
  };

  // Handle opening the video on YouTube : construct the URL using its ID and open the window Youtube corresponding
  const handleOpenVideo = () => { 
    const youtubeUrl = `https://www.youtube.com/watch?v=${id}`;
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '2px solid red', borderRadius: '10px', width: '100%', height: '20%', marginBottom: '20px' }}>
      <p style={{ flex: 1 }}>{title}</p>
      <button style={{ marginRight: '10px' }} onClick={handleOpenVideo}> 
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 5v14l11-7z" />
        </svg>
      </button>
      <button style={{ marginRight: '10px' }} onClick={handleDelete}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 4h-4l-1-2h-6l-1 2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 0h-2v2H9V4H7v2H5v2h14V6h-2V4h-2v2h-2V4z"/>
        </svg>
      </button>
    </div>
  );
};

export default Video;
