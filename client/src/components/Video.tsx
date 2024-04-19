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
    <div className='video' >
      <p className='videoTitle'>{title}</p>
      <div className='buttonContainer'>
        <button className='button' onClick={handleOpenVideo}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.74182 2.82181C3.8919 2.73132 4.0784 2.72601 4.23338 2.80781L13.2334 7.55781C13.3974 7.64436 13.5 7.81457 13.5 8C13.5 8.18543 13.3974 8.35564 13.2334 8.44219L4.23338 13.1922C4.0784 13.274 3.8919 13.2687 3.74182 13.1782C3.59175 13.0877 3.5 12.9252 3.5 12.75V3.25C3.5 3.07476 3.59175 2.9123 3.74182 2.82181ZM4.5 4.07925V11.9207L11.9288 8L4.5 4.07925Z" fill="black"/>
          </svg>
        </button>
        <button className='button' onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3536 3.35355C13.5488 3.15829 13.5488 2.84171 13.3536 2.64645C13.1583 2.45118 12.8417 2.45118 12.6464 2.64645L8 7.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L7.29289 8L2.64645 12.6464C2.45118 12.8417 2.45118 13.1583 2.64645 13.3536C2.84171 13.5488 3.15829 13.5488 3.35355 13.3536L8 8.70711L12.6464 13.3536C12.8417 13.5488 13.1583 13.5488 13.3536 13.3536C13.5488 13.1583 13.5488 12.8417 13.3536 12.6464L8.70711 8L13.3536 3.35355Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Video;
