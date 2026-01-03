import VideoEphtein from '../assets/memes/videoeps.mp4'
import CarpetClean from '../assets/memes/asmr_cleaning.mp4'
import "../AdhdRoom.css"

function ADHDRoom() {
    return (
        <div className="ahdh-room">
            <h1 className="ahdh-room-title">ADHD Room</h1>
            <div className="video-container">

                <video
                    src={CarpetClean}
                    className="carpet-clean"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    width="100%"
                    style={{maxWidth: "400px"}}
                ></video>

                <div className="middle-text">
                    <h2>Brain Rot Zone</h2>
                    <p>
                        This is where I get stuck when the code doesn't work.
                        Enjoy cleaning your carpets.
                    </p>
                </div>

                <video
                    src={VideoEphtein}
                    className="video-epstein"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    width="100%"
                    style={{maxWidth: "400px"}}
                ></video>

            </div>

        </div>
    )
}

export default ADHDRoom