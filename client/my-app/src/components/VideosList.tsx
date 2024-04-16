import React from 'react';

interface Video {
  id: string;
  title: string;
}

interface VideosListProps {
  videos: Video[] | undefined; 
}

const VideosList: React.FC<VideosListProps> = ({ videos }) => {
  return (
    <div style={{ border: '2px solid red', borderRadius: '10px', width: '100%', height: '50%', overflowY: 'auto' }}>
      {videos && videos.map((video) => (
        <div key={video.id}>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideosList;
