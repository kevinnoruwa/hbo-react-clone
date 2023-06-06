import MainLayout from "../components/layouts/MainLayout"
import FeaturedMedia from "../components/ui/Featured/FeaturedMedia"
import ForYou from "../components/ui/ForYouList/ForYouList"
import JustAdded from "../components/ui/JustAdded/JustAdded"
import PosterView from "../components/ui/PosterView/PosterView"

export default function HomeView() {
  return (
    <MainLayout>
        <FeaturedMedia/>
        <ForYou/>
        <JustAdded/>
        <PosterView/>
        


    </MainLayout>
 
     
    
  )
}
