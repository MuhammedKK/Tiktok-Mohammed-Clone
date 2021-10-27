import React, {useState} from 'react';
import './VideoSidebar.css';
import FavoriateIcon from '@material-ui/icons/Favorite';
import FavoriateBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = ({likes, comments, shares}) => {

    // Hook Of Likes
    const [like, setLike] = useState(false);

    return (
        <div>
            <div className="video__sidebar">
                <div className="video_interact_icon">
                    {
                        (like) ? (
                            <FavoriateIcon onClick={(e) => setLike(false)} />
                        ) : 
                            <FavoriateBorderIcon onClick={(e) => setLike(true)} />
                    }
                    <p>{(like) ? likes + 1 : likes}</p>
                </div>
                <div className="video_interact_icon">
                    <MessageIcon />
                    <p>{comments}</p>
                </div>
                <div className="video_interact_icon">
                    <ShareIcon />
                    <p>{shares}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoSidebar
