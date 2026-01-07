import {  FaYoutube } from "react-icons/fa";
import "../styles/YouTubeDownloaderPage.css"
import {useState} from "react";
import {client} from "../api.ts";

function YouTubeDownloaderPage() {
    const [msg, setMsg] = useState("")
    const [link, setLink] = useState("")

    const sendUrlMutation = client.sendVideoUrl.useMutation();

    const handleDownload = async () => {
        if (!link) return setMsg("Enter link!");

        try {
            const result = await sendUrlMutation.mutateAsync({
                body: { url: link }
            });
            if (result.status === 200) {
                setMsg("backend response" + result.body.message)
            } else {
                setMsg("Error: " + result.body);
            }
        } catch (error) {
            setMsg("Error: " + error);
        }
    }


    return (
        <div className="downloader-container">
            <h1 className="downloader-title">
                <FaYoutube className="yt-icon" /> YouTube Downloader
            </h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Insert link here..."
                    className="search-input"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <button className="search-btn"
                        onClick={handleDownload}
                        disabled={sendUrlMutation.isPending}>

                    {sendUrlMutation.isPending ? "I am sending..." : "Download"}

                </button>
            </div>
            <p className="alert-text"> {msg} </p>

        </div>
    );
}



export default YouTubeDownloaderPage;