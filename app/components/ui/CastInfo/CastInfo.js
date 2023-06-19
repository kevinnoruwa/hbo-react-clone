import axios from "axios";
import React from "react";
import { shuffleArray } from "../../utilities/utilities";

export default function CastInfo(props) {
  const [loadingData, setLoadingData] = React.useState(true);
  const [credits, setCredits] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.mediaId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setCredits(res.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((item, index) => {
        return (
          <ul  key={index} className="cast-info_crew">
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
        return(
            <div>Loading Cast</div>
        )
    }
  };

  const showCrew= () => {
    if (loadingData !== true) {
      return credits.crew.map((item,index) => {
      
        return (
          <ul key={index}    className="cast-info_crew">
            <li >{item.job}</li>
             <li>{item.name}</li>
          </ul>
        );
      });
    } else {
        return(
            <div>Loading Crew</div>
        )
    }
  };
  return (
    <div className="cast-info">
      <div className="cast-info_group-title">Cast & Crew</div>
      <div className="cast-info_list">{showCast()}</div>
      <div className="cast-info_group-title">Director</div>
      <div className="cast-info_list">
       {showCrew()}
      </div>
    </div>
  );
}

