"use client";

import React from "react";

import { useStateContext } from "./components/Context/HboProvider";
import { useRouter } from "next/navigation";
import MainLayout from "./components/layouts/MainLayout";
import FeaturedMedia from "./components/ui/Featured/FeaturedMedia";
import AuthCheck from "./components/Auth/AuthCheck";
import MediaRow from "./components/ui/MediaRow/MediaRow";


export default function Home() {
  return AuthCheck (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v" />
      <MediaRow title="Series" type="small-h" />
      <MediaRow title="Action"type="small-v" />
      <MediaRow title="Horror" type="small-v"/>
      <MediaRow title="Animation" type="large-h"/>
      <MediaRow title="Sci-fi" type="small-v"/>
    </MainLayout>
  );
}
