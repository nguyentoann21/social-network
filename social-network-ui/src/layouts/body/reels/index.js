import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reel.scss";
import PandaWalk from "../../../assets/gif/panda-walk.gif";

const Reel = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [loaded, setLoaded] = useState([false, false, false]);

    const videoUrls = [
        require("../../../assets/videos/video-1.mp4"),
        require("../../../assets/videos/video-2.mp4"),
        require("../../../assets/videos/video-3.mp4"),
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        afterChange: (current) => setCurrentVideo(current),
        fade: true,
    };

    const handleLoaded = (index) => {
        setLoaded(loaded.map((loaded, i) => (i === index ? true : loaded)));
    };

    return (
        <div className="reel-container">
            <div className="reel-title">
                <h1>Reels</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="reel-slider-container">
                <div className='main-video'>
                    {videoUrls.map((url, index) => (
                        <video
                            key={index}
                            controls
                            autoPlay
                            muted
                            loop
                            style={{ display: currentVideo === index ? "block" : "none" }}
                            onLoadedData={() => handleLoaded(index)}
                        >
                            <source src={url} type="video/mp4" />
                            {!loaded[index] && <img src={PandaWalk} alt="Loading..." />}
                        </video>
                    ))}
                </div>
                <div className="description-for-main">
                    <div className="thumbnails">
                        <img className="img-thumbnail" src={PandaWalk} alt="panda-walk" />
                        <img className="img-thumbnail" src={PandaWalk} alt="panda-walk" />
                        <img className="img-thumbnail" src={PandaWalk} alt="panda-walk" />
                    </div>
                    <div className="video-thumbnails">
                        <Slider {...settings}>
                            {videoUrls.map((url, index) => (
                                <div key={index} onClick={() => setCurrentVideo(index)}>
                                    <video muted>
                                        <source src={url} type="video/mp4" />
                                    </video>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reel;
