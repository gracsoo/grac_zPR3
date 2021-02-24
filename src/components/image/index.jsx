import React,{Component, useEffect, useState} from 'react';
import {IMAGES} from '../../contants/index';
import "./index.css";
function Image(){
    let [imgName,changeImgName] = useState(null);
    let [topShow,changeTopShow] = useState(false);
    const changeImg = (imgName) => {
        changeImgName(imgName)
    }
    const closeImg = () => {
        changeImgName(null);
    }
    useEffect(()=>{
        window.addEventListener("scroll", scrollFunction);
    },[])
    const scrollFunction = () => {
        if(window.pageYOffset > 100){ //show button
            changeTopShow(true);
        } else { //hide button
            changeTopShow(false);
        }
    }
    const goTop = () => {
        window.scrollTo(0,0);
    }
    console.log(topShow,'topShow')
    return <>
        <div className="gallery">
            {
               IMAGES && IMAGES.map((item)=>{
                   return <div className="img-container" key={item.imgName} onClick={() => {changeImg(item.imgName)}}>
                        <img src={require(`../../static/images/${item.imgName}.png`).default} alt={item.imgName} data-original={`${item.imgName}.png`} />
                    </div>
               }) 
            }
        </div>
        <div className={`modal ${imgName ? 'open' : ''}`} onClick={closeImg}>
            {imgName && <img onClick={(e) => {e.stopPropagation()}} src={require(`../../static/images/${imgName}.png`).default} alt="" className={`full-img ${imgName ? 'open' : ''}`} />}
        </div>
        <button id="back-to-top" style={{display:`${topShow ? 'block' : 'none'}`}} onClick={goTop}>back to top</button>
    </>
}
export default Image