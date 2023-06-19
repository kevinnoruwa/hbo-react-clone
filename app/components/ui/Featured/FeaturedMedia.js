
import { useRouter } from "next/navigation";
import { useStateContext } from "../../Context/HboProvider";

export default function FeaturedMedia(props) {
  const router = useRouter()
  const globalState = useStateContext()
  const clickedPlay = () => {
    router.push(props.linkUrl);
  };
  const clickedAdd = (props) => {
   globalState.addToList({mediaId: props.mediaId, mediaType: props.mediaType, mediaUrl: props.mediaUrl})
  
  }

  const showMedia = () => {
    if (props.type === "front") {
      return (
        <iframe
          className="featured-media_video"
          width="100%"
          height="100%"
          src={props.MediaUrl}
          allow="autoplay; accelerometer; autopay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
        return (
            <img src={props.mediaUrl}    className="featured-media_img"/>

        )
      
        
    }
  };
  return (
    <div className={`featured-media ${props.type === 'single' && 'featured-media-single'}` }>
        {showMedia()}
      <div className="featured-media_bg">
        <div className="featured-media_container">
          <div className="featured-media_title" onClick={clickedPlay}>
            {props.title}
          </div>
          <div className={`featured-media_playing ${props.type === 'single' && 'hide-comp'}`}>NOW PLAYING</div>
          <div className={`featured-media_location ${props.type === 'single' && 'hide-comp'}`}>{props.location}</div>
          <div className="featured-media_buttons">
            <div className="featured-media_play-btn" onClick={clickedPlay}>
              <i className="fas fa-play" />
            </div>
            <div className={`featured-media_add-btn ${props.type !== 'single' && '-hide'}`} onClick={() => clickedAdd(props)}>
              <i className="fas fa-plus" />
            </div>
            <div onClick={clickedPlay} className={`featured-media_info-btn ${props.type === 'single' && 'hide-comp'}`}>
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
