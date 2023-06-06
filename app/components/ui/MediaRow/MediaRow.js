import React from 'react'


export default function MediaRow(props) {
  const [loadingData, setLoadingData] = React.useState(true)

  const showThumbnails = () => {
    setTimeout(() => setLoadingData(false), 6000)
    return loadingData ? loopComp(<Skeleton/>, 10) : loopComp(<Thumbnail/>, 10)

  }
  let i;
  function loopComp(comp, digit) {
    let thumbnails = [];
    for (i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  }

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row_title">{props.title}</h3>
      <div className="media-row_thumbnails">{showThumbnails()}</div>
    </div>
  );
}

const Thumbnail = () => {
  return (
    <div className="media-row_thumbnail">
      <img src="https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg" />
      <div className="media-row_top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
  );
};
