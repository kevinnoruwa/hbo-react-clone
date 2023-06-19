import { v4 } from "uuid";
import { useStateContext } from "../../Context/HboProvider";
import React from "react";
import axios from "axios";
import Link from "next/link";
export default function SearchModal() {
  const globalState = useStateContext();
  const [popData, setPopData] = React.useState([]);
  const [searchData, setSearchData] = React.useState([]);
  const [showResults, setShowResults] = React.useState(true);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.searchOpen]);

  // populate the seacrh modal
  React.useEffect(() => {
    async function populate() {
      try {
        let popData = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=28%7C16%7C27%7C878&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setPopData(popData.data.results.filter((item, i) => i < 20));
        setShowResults(false);
      } catch (err) {
        console.log(err);
      }
    }
    populate();
  }, []);

  async function handleInput(event) {
    try {
      setText(event.target.value);
      let searchDatas = await axios.get(
        `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${event.target.value}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setSearchData(
        searchDatas.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );
      setShowResults(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className={`search-modal ${
        globalState.searchOpen && "search-modal-active"
      }`}
    >
      <div className="search-modal_input-group">
        <input
          onChange={handleInput}
          className="search-modal_input"
          type="text"
          placeholder=""
          value={text}
        />
        <div
          onClick={globalState.setSearchOpenAction}
          className="search-modal_close-btn"
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <h3 className="search-modal_title">{showResults === true && searchData.length >= 1? `Search Results for ${text}`: "Popular Searches" }</h3>
      <div className="search-modal_thumbnails">
        {showResults === true && searchData.length >= 1 ? <SearchResults searchData={searchData} /> : <PopularResults popData={popData}/> }
      </div>
    </div>
  );
}

const PopularResults = (props) => {
  const globalState = useStateContext();
  return props.popData.map((item, index) => {
  
    return (
      <Link
        onClick={globalState.setSearchOpenAction}
        href={`/movie/${item.id}`}
        key={index}
      >
        <div className="search-modal_thumbnail ">
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <div className="search-modal_top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </Link>
    );
  });
};



const SearchResults = (props) => {
  const globalState = useStateContext()
  return props.searchData.map((item, index) => {
    return (
       <Link   onClick={globalState.setSearchOpenAction} href={`/${item.media_type}/${item.id}`} key={index}>
         <div className="search-modal_thumbnail ">
         <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <div className="search-modal_top-layer">
              <i className="fas fa-play" />
            </div>

         </div>
      </Link>
    );
  });
};
