import Typical from 'react-typical';
import { FaChair, FaRegUser, FaMapMarkerAlt } from 'react-icons/fa';
import './configure.css';
const Configure = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="container">
                <div className="header">
                    <div className="imagen">
                        <img
                            src="https://www.pngkey.com/png/full/364-3648409_download-office-chair-icon-png.png"
                            alt="chair.png"
                        />
                    </div>
                    <div className="title">
                        {/* <h1>SMART CHAIR</h1> */}
                        <h1>
                            <Typical
                                steps={[
                                    'SMART',
                                    1000,
                                    'SMART CHAIR',
                                    2000,
                                    'SMART CHAIR.',
                                    4000,
                                ]}
                                loop={Infinity}
                            />
                        </h1>
                        <p>by Grupo No.18</p>
                    </div>
                </div>
                <div className="content">
                    <div className="card-chair">
                        <div className="card-chair-head">
                            <p>Identificador Silla</p>
                            <FaChair />
                        </div>
                        <div className="card-chair-body">
                            <h3>a12352dd98</h3>
                        </div>
                    </div>
                    <div className="card-chair">
                        <div className="card-chair-head">
                            <p>Usuario</p>
                            <FaRegUser />
                        </div>
                        <div className="card-chair-body">
                            <h3>David</h3>
                        </div>
                    </div>
                    <div className="card-chair last-c">
                        <div className="card-chair-head">
                            <p>Ubicación</p>
                            <FaMapMarkerAlt />
                        </div>
                        <div className="card-chair-body">
                            <h3>Nueva York, EE.UU</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Configure;
