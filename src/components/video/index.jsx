import React,{Component,useState} from 'react';
import {VIDEOS} from '../../contants/index';
import './index.css';
function Video(){
    let [videoSrc,setVideoSrc] = useState(null);
    const changeVideo = (videoSrc) => {
        setVideoSrc(videoSrc)
    }
    const closeVideo = () => {
        setVideoSrc(null)
    }
    return <>
        {videoSrc && <div className="popup" id="vid" onClick={closeVideo}>
            <video onClick={(e) => {e.stopPropagation()}} className="enlargeVideo" id="popup_vid" controls autoPlay src={require(`../../static/videos/${videoSrc}.MP4`).default}></video>
        </div>}
        <div className="gallery">
            {VIDEOS && VIDEOS.map((item)=>{
                return <video key={item.videoName} className="video" src={require(`../../static/videos/${item.videoName}.MP4`).default} onClick={() => {changeVideo(item.videoName)}}></video>
            })}
        </div>
    </>
}
export default Video