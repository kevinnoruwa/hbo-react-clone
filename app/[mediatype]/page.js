"use client";

import React from "react";
import LazyLoad from "react-lazy-load";
import axios from "axios";
import { shuffleArray } from "../components/utilities/utilities";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/ui/Featured/FeaturedMedia";
import AuthCheck from "../components/Auth/AuthCheck";
import MediaRow from "../components/ui/MediaRow/MediaRow";
import GenreNav from "../components/ui/GenreNav/GenreNav";
import { useStateContext } from "../components/Context/HboProvider";
export default function MediaTypePage({ params }) {
  const [genresData, setGenresData] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState([]);
 const globalState = useStateContext()
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${params.mediatype}/list?language=en&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setGenresData(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/${params.mediatype}?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        const Data = shuffleArray(res.data.results);
        setFeaturedData(Data[0]);
      })
      .catch((err) => {
        consoele.log(err);
      });
  }, []);
  let t;
  if (params.mediatype === undefined) {
    t = featuredData.title;
  } else if (params.mediatype === "movie") {
    t = featuredData.title;
  } else if (params.mediatype === "tv") {
    t = featuredData.name;
  }

  const showRandomMedia = () => {
    return genresData.map((item) => {
      return (
        <LazyLoad   key={item.id} offset={200}>
          <MediaRow
            title={item.name}
            type='small-v'
            endpoint={`discover/${params.mediatype}?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=${item.id}`}
            mediaType={params.mediatype}
          />
        </LazyLoad>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        type="single"
        linkUrl={`/${params.mediatype}/${featuredData.id}`}
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        title={t}
        mediaUrl={`https://image.tmdb.org/t/p/original${featuredData.backdrop_path}`}
        mediaType={params.mediatype}
        mediaId={params.id}
      />
      <GenreNav
        mediaType={params.mediatype}
        genresData={genresData}
        featuredData={featuredData}
      />
      {showRandomMedia()}
 
    </MainLayout>
  );
}


