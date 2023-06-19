export default function Thumbnail(props) {
 
  return (
    <div className="media-row_thumbnail">
      <img src=''/>
      {/* <img src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`} /> */}
      <div className="media-row_top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
}
