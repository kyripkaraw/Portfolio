import MemeFloater from "../MemeFlooter.tsx";
import avatarImage from "../assets/avatar.jpg";

function Home() {
    return (
        <div className="portfolio-container">
            <div className="header-row">
                <Avatar/>
                <h1 className="main-title">About me</h1>
            </div>

            <div className="tech-stack">
                <h2>My Stack</h2>
                <p> Java | Python | JS | React </p>
                <MyStackContent/>
            </div>
            <MemeFloater/>

        </div>
    )
}

function Avatar() {
    return (
        <img className="avatar" src={avatarImage} alt="Avatar" />
    )
}


function MyStackContent() {
    return (
        <>

        </>
    )
}


export default Home;