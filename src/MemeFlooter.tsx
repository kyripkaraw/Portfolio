import memeImage1 from './assets/memes/meme.jpg';
import memeImage2 from './assets/memes/meme2.jpg';
import memeImage3 from './assets/memes/meme3.jpg';
import memeImage4 from './assets/memes/meme4.jpg';

function MemeBlock() {
    return (
        <div className="image-row">
            <img src={memeImage1} alt="rofl" className="meme-img"/>
            <img src={memeImage2} alt="rofl" className="meme-img"/>
            <img src={memeImage3} alt="rofl" className="meme-img"/>
            <img src={memeImage4} alt="rofl" className="meme-img" />
        </div>
    )
}

export default MemeBlock;