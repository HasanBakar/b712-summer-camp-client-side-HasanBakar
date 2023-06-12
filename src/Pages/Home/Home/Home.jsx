import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularClasses from './../PopularClasses/PopularClasses';





const Home = () => {
    
    
    return (
      <div>
        <Helmet>
          <title>Home | DanceScape</title>
        </Helmet>
        <div>
          <Banner></Banner>
        </div>
        <div className="flex justify-center items-center my-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Popular Classes</h3>
            <p>You can explore and achieve these!</p>
          </div>
        </div>
        <PopularClasses></PopularClasses>
      </div>
    );
};

export default Home;