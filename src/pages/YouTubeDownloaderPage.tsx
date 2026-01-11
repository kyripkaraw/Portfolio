import { RiVideoOnAiFill } from "react-icons/ri";
import "../styles/YouTubeDownloaderPage.css";
import {type ChangeEvent, useState} from "react";

function YouTubeDownloaderPage() {
    const [url, setUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleDownload = async () => {
        if (!url) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://16.171.253.188:8000/download-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Download error');
            }

            const blob = await response.blob();

            const downloadUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = downloadUrl;

            link.download = `video_${Date.now()}.mp4`;

            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(downloadUrl);

        } catch (err: any) {
            console.error(err);
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    return (
        <div className="downloader-container">
            <h1 className="downloader-title">
                <RiVideoOnAiFill className="yt-icon" /> Video Downloader
            </h1>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Paste TikTok/Reels link here..."
                    className="search-input"
                    value={url}
                    onChange={handleInputChange}
                />
                <button
                    className="search-btn"
                    onClick={handleDownload}
                    disabled={loading || !url}
                    style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                    {loading ? 'Processing...' : 'Download'}
                </button>
            </div>

            {error && (
                <p className="alert-text" style={{ color: 'red', marginTop: '10px' }}>
                    {error}
                </p>
            )}
        </div>
    );
}

export default YouTubeDownloaderPage;