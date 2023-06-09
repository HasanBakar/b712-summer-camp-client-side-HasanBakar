import NavBar from './../Pages/Shared/NavBar/NavBar';
import { Outlet } from "react-router-dom";
import Footer from './../Pages/Shared/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;