import React, {useState, useEffect} from 'react';
import './App.css';
import Video from './components/Video';
import db from './firebase';
import {onSnapshot, collection} from '@firebase/firestore';

function App() {

  // Hook Of Comming Videos From Database
  const [videos, setVideos] = useState([]); 

  // Hook Of Getting Videos From The Database
  useEffect(() => {
    onSnapshot(collection(db, 'videos'), (snapshot) => {
      setVideos(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

  return (
    <div className="app">
        {/* Video Component */}
        <div className="app__videos">
          {videos.map(({url, channelname, description, songname, likes, comments, shares}) => (
            <Video 
              url={url}
              channelname= {channelname}
              description={description}
              songname={songname}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
