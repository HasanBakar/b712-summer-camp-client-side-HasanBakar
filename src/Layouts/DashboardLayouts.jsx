
import { Outlet } from 'react-router-dom';
import NavBar from './../Pages/Shared/NavBar/NavBar';
import Footer from './../Pages/Shared/Footer/Footer';

const DashboardLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayouts;