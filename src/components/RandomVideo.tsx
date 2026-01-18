import {useState, useEffect} from "react";

interface VideoData {
    link: string;
    name: string;
}

const videoLinks = [
    {
        url: "https://www.instagram.com/reel/DS_ud7CD_iU/?igsh=MWNyOTJrcjc4aDY4dg=="
    },
    {
        url: "https://www.tiktok.com/@bek.x29/video/7593739371698867478?is_from_webapp=1&sender_device=pc"
    }
]
function RandomVideo() {
    const [videoData, setVideoData] = useState<VideoData | null>(null);
    const [loading, setLoading] = useState(false);

    const videoStream = async () => {
        setLoading(true)
        try {
            const randomIndex = Math.floor(Math.random() * videoLinks.length);
            const randomVideoUrl = videoLinks[randomIndex].url;
            const response = await fetch("https://api.kyripka.dev/video-streaming", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url: randomVideoUrl}),
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Download error');
            }
            const data = await response.json()
            const rawUrl = data.stream_url; // Або data.url, перевір що приходить
            const proxyUrl = `https://api.kyripka.dev/proxy-video?url=${encodeURIComponent(rawUrl)}`;

            // 3. Зберігаємо вже НАШЕ посилання
            setVideoData({
                link: proxyUrl,
                name: data.title || "Random Video"
            });

        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        videoStream();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <br /><br />

            {/* 3. Перевіряємо, чи є дані, перед тим як показувати */}
            {videoData ? (
                <div>
                    <h3>{videoData.name}</h3>
                    <video
                        key={videoData.link} // Цей ключ змушує плеєр оновлюватися при зміні відео
                        src={videoData.link}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        width="100%"
                        style={{ maxWidth: "400px", borderRadius: "10px", backgroundColor: "#000" }}
                    >
                        Browser not supported
                    </video>
                </div>
            ) : (
                <p>No video loaded yet</p>
            )}
        </div>
    );
}
export default RandomVideo;

