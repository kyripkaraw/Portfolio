import {useMemo} from "react";
import CarpetVideo from "../assets/memes/video/asmr_cleaning.mp4";
import EpsteinVideo from "../assets/memes/video/videoeps.mp4";
import CarpetVideo2 from "../assets/memes/video/carpet_clean2.mp4";
import SoapCutting from "../assets/memes/video/soap_cleaning.mp4";

const videoList = [
    {
        id: 1,
        name: "Carpet Cleaning",
        link: CarpetVideo
    },
    {
        id: 2,
        name: "Epstein Vs Diddy",
        link: EpsteinVideo
    },
    {
        id: 3,
        name: "Carpet Cleaning",
        link: CarpetVideo2
    },
    {
        id: 4,
        name: "Soap Cutting",
        link: SoapCutting
    }
]

function RandomVideo() {
    const video = useMemo( () => {
        if (videoList.length === 0) return null;
        const randIndex = Math.floor(Math.random() * videoList.length)
        return videoList[randIndex];
    }, []);

    if (!video) return <div> No video found! </div>;

    return (
        <div>
            <h3> {video.name} </h3>
            <video src={video.link} autoPlay muted loop playsInline controls width="100%" style={{maxWidth: "400px"}}></video>
        </div>
    )
}
export default RandomVideo;

