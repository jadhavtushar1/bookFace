import AllBooksCarousel from "../../Components/AllBooksCarousel/AllBooksCarousel"
import Headers from "../../Components/Header/Header"
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel"
import BookGrid from "../../Components/HomeContentGrid/BookGrid"
import VideoContainer from "../../Components/VideoContainer/VideoContainer"
const HomePage=()=>{
    return (
        <div>
            <Headers/>
            <HomeCarousel/>
            <BookGrid/>
            <VideoContainer/>
            <AllBooksCarousel/>
        </div>
    )
}

export default HomePage