

export default function  FeaturedMedia(){
    return(
        <div className="featured-media">
            <iframe 
            className="featured-media_video" 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&start=16&loop=1&mute=1" 
             allow="autoplay; accelerometer; autopay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen/>
         <div className="featured-media_bg">
            <div className="featured-media_container">
                <div className="featured-media_title">Mortal Kombat</div>
                <div className="featured-media_playing">NOW PLAYING</div>
                <div className="featured-media_location">In theaters and on HBO MAX. Streaming throughout May 23.</div>
                <div className="featured-media_buttons">
                    <div className="featured-media_play-btn">
                        <i className="fas fa-play"/>

                    </div>
                    <div className="featured-media_info-btn">MORE INFO</div>
                
                </div>

            </div>
         </div>
        </div>
    )
}