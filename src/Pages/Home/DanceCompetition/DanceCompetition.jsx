
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
const DanceCompetition = () => {
    return (
      <div className="p-6 py-12 bg-pink-600 text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <Slide>
              <h2 className="text-center text-4xl tracki font-bold">
                Dance Competition is going on
              </h2>
            </Slide>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <Fade delay={1e3} cascade damping={1e-1}>
                <p>
                  Dancing is like dreaming with your feet!” —{" "}
                  <span className="font-bold text-lg">Constanze Mozart</span>
                </p>
              </Fade>
            </div>
            <Link
              to="/register"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 hover:bg-pink-500 rounded-md border block bg-gray-900 text-gray-50 border-gray-600"
            >
              Register now
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DanceCompetition;