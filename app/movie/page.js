'use client'


import MainLayout from "../components/layouts/MainLayout";
import CastInfo from "../components/ui/CastInfo/CastInfo";
import FeaturedMedia from "../components/ui/Featured/FeaturedMedia";
import AuthCheck from "../components/Auth/AuthCheck";
import MediaRow from "../components/ui/MediaRow/MediaRow";
export default function MovieView() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow type="small-v" title="More Like This"/>
      <CastInfo/>
    </MainLayout>
  );
}
