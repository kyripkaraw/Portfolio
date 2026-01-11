import { RiVideoOnAiFill } from "react-icons/ri";
import "../styles/YouTubeDownloaderPage.css"
import {useState} from "react";


function YouTubeDownloaderPage() {
    const [link, setLink] = useState('')
    const [msg, setMsg] = useState('')


    return (
        <div className="downloader-container">
            <h1 className="downloader-title">
                <RiVideoOnAiFill className="yt-icon" /> Video Downloader
            </h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Insert link here..."
                    className="search-input"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <button className="search-btn"> Download </button>
            </div>
            <p>{msg}</p>
            <p className="alert-text"> {msg} </p>
        </div>
    );

}



export default YouTubeDownloaderPage;
