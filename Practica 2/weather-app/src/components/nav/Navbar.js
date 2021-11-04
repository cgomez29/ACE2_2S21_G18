import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <aside className={active ? 'sidebar active' : 'sidebar'}>
            <Link to="/" className="sidebar-title" onClick={handleClick}>
                {active ? (
                    <div className="description">
                        <p>Weather</p>
                        {/* <i className="fas fa-temperature-low"></i> */}
                    </div>
                ) : (
                    <i className="fas fa-bars mr-1"></i>
                )}
            </Link>
            <div className="sidebar-title">
                <>
                    {active ? (
                        <div className="description">
                            <p>Clima</p>
                            <i className="far fa-sun"></i>
                        </div>
                    ) : (
                        <i className="far fa-sun"></i>
                    )}
                </>
            </div>
            <div className="sidebar-title">
                <>
                    {active ? (
                        <div className="description">
                            <p>Temp</p>
                            <i className="fas fa-cloud-moon"></i>
                        </div>
                    ) : (
                        <i className="fas fa-cloud-moon"></i>
                    )}
                </>
            </div>
            <div className="sidebar-title">
                <>
                    {active ? (
                        <div className="description">
                            <p>Predic</p>
                            <i className="fas fa-cloud-rain"></i>
                        </div>
                    ) : (
                        <i className="fas fa-cloud-rain"></i>
                    )}
                </>
            </div>
        </aside>
    );
};
