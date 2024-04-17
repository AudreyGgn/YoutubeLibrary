import React from 'react';
import VideoPlayer from './VideoPlayer';

interface DisplayDivProps {
  videoId: string;
}

const DisplayDiv: React.FC<DisplayDivProps> = ({ videoId }) => {
  return (
    <div style={{ border: '2px solid red', borderRadius: '10px', width: '80%', height: '80%'}}>
      <VideoPlayer videoId={videoId} />
    </div>
  );
};

export default DisplayDiv;
