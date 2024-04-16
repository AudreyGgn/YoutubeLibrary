import React, { useState, useEffect } from 'react';
import MenuDiv from './components/MenuDiv';

//Fetch data from route "/"
async function fetchDatabase(): Promise<any> {
  const url = 'http://localhost:5000/';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Alas, an error hath occurred: ' + response.statusText);
  }
  return await response.json();
}

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


  const userName = data?.name;
  const videos = data?.videos;

  return (
    
      <div>
      <MenuDiv userName={userName} videos={videos} />
      </div>
  
  );
}

export default App