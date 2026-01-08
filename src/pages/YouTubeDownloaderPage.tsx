import { FaYoutube } from "react-icons/fa";
import "../styles/YouTubeDownloaderPage.css"
import {useEffect, useState} from "react";
import {client} from "../api.ts";

function YouTubeDownloaderPage() {
    const [ msg, setMsg ] = useState("")
    const [ link, setLink ] = useState("")
    const [currentJobId, setCurrentJobId] = useState<string | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const sendUrlMutation = client.sendVideoUrl.useMutation();
    const baseUrl = "http://localhost:3000"

    const statusQuery = client.checkStatus.useQuery(
        ["checkStatus", currentJobId],
        {params: {jobId: currentJobId || ""}},
        {
            enabled: !!currentJobId && !isDownloading,
            refetchInterval: (data) => {
                if (data?.body?.status === "finished") return false;
                return 1000;
            }
        }
    )

    useEffect(() => {
        if (statusQuery.data?.body?.status === 'finished' && currentJobId && !isDownloading) {
            setIsDownloading(true);
            window.location.href = `${baseUrl}/download/${currentJobId}`;
        }
    }, [statusQuery.data, currentJobId, baseUrl, isDownloading]);


    const handleDownload = async () => {
        if (!link) return setMsg("Enter link!");
        setCurrentJobId(null);
        setIsDownloading(false);

        try {
            const result = await sendUrlMutation.mutateAsync({
                body: {
                    url: link
                }
            });
            if (result.status === 200) {
                setCurrentJobId(result.body.jobId);
            } else {
                setMsg("Error: " + JSON.stringify(result.body));
            }
        } catch (error) {
            console.log(error)
            setMsg("Request failed");
        }
    }
    const progress = statusQuery.data?.body;


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

                    {sendUrlMutation.isPending ? "Sending..." : "Download"}

                </button>
            </div>
            <p>{msg}</p>
            <p className="alert-text"> {msg} </p>


            {currentJobId && progress && (
                <div>
                    <h3>Status: {progress.status}</h3>
                    {progress.percentage && (
                        <div>
                            <p>Progress: {progress.percentage}%</p>

                        </div>
                    )}
                </div>
            )}
        </div>
    );

}



export default YouTubeDownloaderPage;
