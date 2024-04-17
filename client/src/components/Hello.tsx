import React from 'react';

interface HelloProps {
    userName: string;
  }
  
  const Hello: React.FC<HelloProps> = ({ userName }) => {
    return (
      <div style={{ border: '2px solid red', borderRadius: '10px', width: '100%', height: '20%', marginBottom: '20px' }}>
        <p>Hello {userName}</p>
      </div>
    );
  };

export default Hello;