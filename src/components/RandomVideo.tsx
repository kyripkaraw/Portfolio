import {useMemo} from "react";

const videoList = [
    {
        id: 1,
        name: "Carpet Cleaning",
        link: "src/assets/memes/video/asmr_cleaning.mp4"
    },
    {
        id: 2,
        name: "Epstein Vs Diddy",
        link: "src/assets/memes/video/videoeps.mp4"
    },
    {
        id: 3,
        name: "Carpet Cleaning",
        link: "src/assets/memes/video/carpet_clean2.mp4"
    },
    {
        id: 4,
        name: "Soap Cutting",
        link: "src/assets/memes/video/soap_cleaning.mp4"
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

