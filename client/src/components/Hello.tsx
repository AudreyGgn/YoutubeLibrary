import React from 'react';
import './MenuDiv';

interface HelloProps {
    userName: string;
  }
  
  const Hello: React.FC<HelloProps> = ({ userName }) => {
    return (
      <h1 className="hello">Hello {userName} !</h1>
    );
  };

export default Hello;