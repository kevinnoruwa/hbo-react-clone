"use client";

import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import CastInfo from "../../components/ui/CastInfo/CastInfo";
import FeaturedMedia from "../../components/ui/Featured/FeaturedMedia";
import AuthCheck from "../../components/Auth/AuthCheck";
import MediaRow from "../../components/ui/MediaRow/MediaRow";
import { useRouter } from "next/navigation";
import axios from "axios";
import LazyLoad from "react-lazy-load";

export default function SingleMediaPage({ params }) {
 
  const [mediaData, setMediaData] = React.useState([]);


  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${params.mediatype}/${params.id}?&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setMediaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        type="single"
        title={params.mediatype === 'movie' ? mediaData.title : mediaData.name}
        linkUrl={`/${params.mediatype}/${params.id}`}
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        mediaUrl={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
        mediaType={params.mediatype}
        mediaId={params.id}
      

      />
      <LazyLoad height={680} offset={200}>
        <MediaRow
          title="Similar to this"
          type="small-v"
          mediaType={params.mediatype}
          endpoint={`${params.mediatype === 'movie' ? 'movie': 'tv'}/${params.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo  mediaId={params.id} mediaType={params.mediatype} />
    </MainLayout>
  );
}



