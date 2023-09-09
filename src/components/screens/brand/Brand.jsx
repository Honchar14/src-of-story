import React, { useRef, useEffect } from "react";
import "./Brand.css"
import logo from "../../../../public/img/logo-white.png"

const Brand = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 1;
        }
    }, []);

    return (
        <section className='brand'>
            <div className='container'>
                <div className='video_container'>
                    <video ref={videoRef}
                           className='brand_video'
                           src="../../../../public/img/nike-video.mp4"
                           autoPlay
                           muted
                           loop>
                    </video>
                    <div className="video_overlay">
                        <img className="logo" src={logo} alt="Logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand