import React, {useRef, useState} from 'react'
import './Video.css';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSidebar from './VideoSidebar/VideoSidebar';

const Video = ({url, channelname, description, songname, likes, comments, shares}) => {

    // Hook Of The Video Status
    const [playing, setPlaying] = useState(false);

    // Hook Of The Video Ref
    const videoRef = useRef(null);

    /* Functions Of Handling */

    // Function Of Handle Play The Video
    const handleTheVideoPlay = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        
    }

    return (
        <div className="video">
            <video onClick={handleTheVideoPlay} ref={videoRef} loop className="video__player" src={url}></video>
            {/* Video Sidebar Component */}
            <VideoFooter channelname={channelname} description={description} songname={songname}/>
            {/* Video Footer Component */}
            <VideoSidebar likes={likes} comments={comments} shares={shares} />
        </div>
    )
}

export default Video
