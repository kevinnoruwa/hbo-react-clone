"use client";

import React from "react";
import LazyLoad from "react-lazy-load";

import { useStateContext } from "./components/Context/HboProvider";
import { useRouter } from "next/navigation";
import MainLayout from "./components/layouts/MainLayout";
import FeaturedMedia from "./components/ui/Featured/FeaturedMedia";
import AuthCheck from "./components/Auth/AuthCheck";
import MediaRow from "./components/ui/MediaRow/MediaRow";
import Placeholders from "./components/ui/placeholder/Placeholder";
import { shuffleArray } from "./components/utilities/utilities";
 export default function Home() {
  

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia type="front" linkUrl='/movie/460465' location='In theaters and on HBO MAX. Streaming throughout May 23.'  title='Mortal Kombat' MediaUrl={"https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&start=16&loop=1&mute=1"} mediaType={'movie'} mediaId={460465} />
      <LazyLoad
        height={680}
        offset={200}

      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=28%7C16%7C27%7C878"
        />
      </LazyLoad>
      <LazyLoad
        height={333}
        offset={200}

      >
        <MediaRow
          title="Series"
          mediaType="tv"
          type="small-h"
          endpoint="discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
        />
      </LazyLoad>
      <LazyLoad
        height={440}
        offset={200}
        
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=28"
        />
      </LazyLoad>
      <LazyLoad
        height={440}
        offset={200}

      >
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=27"
        />
      </LazyLoad>
      <LazyLoad
        height={440}
        offset={200}

      >
        <MediaRow
          title="Sci-fi"
          type="small-v"
          endpoint="discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=878"
        />
      </LazyLoad>
      <LazyLoad
        height={333}
        offset={200}
        
      >
        <MediaRow
          title="Animation"
          type="small-h"
          endpoint="discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=16"
        />
      </LazyLoad>
    </MainLayout>
  );
}



