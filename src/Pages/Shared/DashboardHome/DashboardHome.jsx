import { Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from './../../../Providers/AuthProviders';

const StudentHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-6 py-12 bg-pink-600 text-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Slide>
            <h2 className="text-center text-4xl tracki font-bold">
              Welcome to you,{user?.displayName}
            </h2>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
