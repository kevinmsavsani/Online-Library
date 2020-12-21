import './sideBar.css';
import { Link } from 'react-router-dom';

export default function Sidebar(){
    return (
        <div class='sidebar'>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
        </div>
    );
}