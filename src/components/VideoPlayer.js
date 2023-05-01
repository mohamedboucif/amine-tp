const VideoPlayer =()=> {
    return (
        <div>
            <video controls>
                <source src="https://www.f5.com/c/landing/cms-documentation/mp4-video-player"
                 type="video/mp4" /> 
                 Votre navigateur ne supporte pas la video.
            </video>
        </div>
    )
}

export default VideoPlayer;