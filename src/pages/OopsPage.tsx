import { Link } from 'react-router-dom';
import '../styles/OopsPage.css';

export default function OopsPage() {
  return (
    <div className="oops-container">
      <div className="glitch" data-text="Oops!">Oops!</div>
      <div className="sub-title">This page is not working or does not exist.</div>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
  );
}