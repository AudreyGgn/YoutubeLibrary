import React, { useState, useEffect } from 'react';
import MenuDiv from './components/MenuDiv';
import './App.css';

// Fetch data from a dynamic route based on the user's name
async function fetchDatabase(): Promise<any> {

  // Extract username from the URL path
  const path = window.location.pathname;
  const parts = path.split('/');
  const username = parts[parts.length - 1];
  //console.log(username)

  // Build the URL for fetching data
  const url = `http://localhost:5000/api/${username}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Alas, an error hath occurred: ' + response.statusText);
  }
  return await response.json();
}

 // Fetch data from the server when the component mounts (= when the component is created and inserted into the DOM)
function App() {
  const [data, setData] = useState<any>(null);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDatabase();
        setData(response);
        console.log(response)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // Extract data from the fetched response
  const userName = data?.name;
  const videos = data?.videos;

  return (   
    <div className="container">
      <MenuDiv userName={userName} videos={videos} />
    </div>
  );
}

export default App