import React from 'react';
import Video from './Video';

interface VideoData {
  id: string;
  title: string;
}

interface VideosListProps {
  videos: VideoData[] | undefined; 
  onDelete: (id: string) => void;
}


const VideosList: React.FC<VideosListProps> = ({ videos }) => {
    // Fonction pour supprimer une vidéo de la base de données
    const deleteVideo = async (id: string) => {
      try {
        // Envoyer une requête DELETE à l'API pour supprimer la vidéo
        const response = await fetch(`http://localhost:5000/videos/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Si la suppression réussit, actualiser la liste des vidéos ou effectuer d'autres actions si nécessaire
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
