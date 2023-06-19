import React from "react";
import axios from "axios";
import { shuffleArray } from "../../utilities/utilities";
import Link from "next/link";
export default function MediaRow(props) {
  const [loadingData, setLoadingData] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setMovies(shuffleArray(res.data.results));
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function showThumbnails() {
    return loadingData
      ? loopComp(<Skeleton />, movies.length)
      : movies.map((movie) => {
          return <Thumbnail key={movie.id} mediaType={props.mediaType}   movieData={movie}  />;
        });
  }

  function loopComp(comp, digit) {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
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

const Thumbnail = (props) => {
  let m;
  if(props.mediaType === undefined){
    m = 'movie'
  } else if(props.mediaType === 'movie'){
    m = 'movie'
  } else if(props.mediaType === 'tv') {
    m = 'tv'
  }
  
  return (
    <Link href={`/${m}/${props.movieData.id}`}>
      <div className="media-row_thumbnail">
       {props.movieData.poster_path === null? <img src="https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"/> : <img
          src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`}
        />}
        <div className="media-row_top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    </Link>
  );
};



const Skeleton = () => {
  return (
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
  );
};





