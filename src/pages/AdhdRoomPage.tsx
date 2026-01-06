import RandomVideo from "../components/RandomVideo.tsx";
import "../styles/AdhdRoomPage.css"

function AdhdRoomPage() {
    return (
        <div className="ahdh-room">
            <h1 className="ahdh-room-title">ADHD Room</h1>
            <div className="video-container">
                <RandomVideo/>
                <div className="middle-text">
                    <h2>Brain Rot Zone</h2>
                    <p>
                        This is where I get stuck when the code doesn't work.
                        Enjoy cleaning your carpets.
                    </p>
                </div>

                <RandomVideo/>
            </div>
        </div>
    )
}

export default AdhdRoomPage