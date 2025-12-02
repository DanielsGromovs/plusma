import '../styles/components/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-header">
                <li><img src="../src/assets/react.svg" className='sidebar-logo' alt="logo" /></li>
                <li><h2 className="sidebar-title">Plusma</h2></li>
            </ul>
            
            <ul className="sidebar-links">
                <li><a href="">Home</a></li>
                <li><a href="">Orders</a></li>
                <li><a href="">Drivers</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;