import { NavLink } from 'react-router-dom';
import { FaHome, FaBrain } from "react-icons/fa";
import "../styles/NavigationBar.css"

export default function NavigationBar() {
    return (
        <div className='nav-container'>
            <nav className='glass-nav'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <FaHome className="nav-icon" />
                    <span> Home </span>
                </NavLink>

                <NavLink
                    to="/adhd-room"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <FaBrain className="nav-icon" />
                    <span> ADHD Room </span>
                </NavLink>
            </nav>
        </div>
    )
}