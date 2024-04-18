import React from 'react';
import Video from './Video';

// Define interface for video data
interface VideoData {
  id: string;
  title: string;
}

// Define interface for VideosList props
interface VideosListProps {
  videos: VideoData[] | undefined; // Array of video data or undefined
  onDelete: (id: string) => void; // Function to delete a video
}


const VideosList: React.FC<VideosListProps> = ({ videos }) => {

     // Request to delete a video from the database by its ID
    const deleteVideo = async (id: string) => {
      try {
        const response = await fetch(`http://localhost:5000/videos/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('Video deleted successfully');
          window.location.reload();
        } else {
          console.error('Failed to delete video:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting video:', error);
      }
    };

  return (
    <div style={{ border: '2px solid red', borderRadius: '10px', width: '100%', height: '50%', overflowY: 'auto' }}>
      {videos && videos.map((video) => (
        <div key={video.id}>
          <Video id={video.id} title={video.title} onDelete={() => deleteVideo(video.id)} />
        </div>
      ))}
    </div>
  );
};

export default VideosList;
