import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({channelname, description, songname}) => {
    return (
        <div className="video__footer">
            <div className="video__footer__text">
                <h5>@{channelname}</h5>
                <p>{description}</p>
                <div className="footer__ticker">
                <MusicNoteIcon className="footer__ticker__icon" />
                    <Ticker className="footer__ticker__desc" mode="smooth">
                        {
                            ({index}) => ( 
                                <>
                                    <h5>{songname}</h5>
                                </>    
                            )
                        }
                    </Ticker>
                </div>
            </div>
            <img className="video__footer__logo" src="https://static.thenounproject.com/png/934821-200.png" alt="Sppiner" />
        </div>
    )
}

export default VideoFooter
