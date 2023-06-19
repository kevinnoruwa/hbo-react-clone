import React from "react";
import axios from "axios";
import { shuffleArray } from "../../utilities/utilities";

export default function Placeholder(props) {
  const [loadingData, setLoadingData] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  
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
      <div className="media-row_thumbnails">
        <div className="media-row_thumbnail-skeleton">
          <div className="media-row_thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row_thumbnail-skeleton">
          <div className="media-row_thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row_thumbnail-skeleton">
          <div className="media-row_thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row_thumbnail-skeleton">
          <div className="media-row_thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row_thumbnail-skeleton">
          <div className="media-row_thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row_thumbnail-skeleton">
          <div className="media-row_thumbnail-skeleton-img"></div>
        </div>
      </div>
    </div>
  );
}
