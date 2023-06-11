import { useContext } from "react";
import { AuthContext } from './../../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>Home | DanceScape</title>
            </Helmet>
            I am home component {name}
        </div>
    );
};

export default Home;