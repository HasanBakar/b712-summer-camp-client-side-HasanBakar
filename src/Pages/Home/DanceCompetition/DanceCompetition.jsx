
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
              type="button"
              to="/register"
              className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-800 hover:bg-white hover:text-gray-800 text-gray-50"
            >
              Register
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-pink-600">
                Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DanceCompetition;