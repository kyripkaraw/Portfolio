import MemeFloater from "../components/MemeFlooter.tsx";
import avatarImage from "../assets/avatar.jpg";
import ComponentMyStack from "../components/ComponentMyStack.tsx";

function HomePage() {
    return (
        <div className="portfolio-container">
            <div className="header-row">
                <img className="avatar" src={avatarImage} alt="Avatar" />
                <h1 className="main-title">About Me</h1>
            </div>
            <ComponentMyStack/>
            <MemeFloater/>
        </div>
    )
}

export default HomePage;