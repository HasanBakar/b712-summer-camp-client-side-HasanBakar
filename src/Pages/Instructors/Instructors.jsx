
import { Helmet } from 'react-helmet-async';
import useInstructors from './../../hooks/useInstructors';
import InsCard from './../Shared/InsCard/InsCard';


const Instructors = () => {
    const { instructors } = useInstructors();
    return (
      <>
        <Helmet>
          <title>Instructors | DanceScape</title>
        </Helmet>
        <div className="grid md:grid-cols-3 gap-10 my-14">
          {instructors.map((ins) => (
            <InsCard key={ins._id} data={ins}></InsCard>
          ))}
        </div>
      </>
    );
};

export default Instructors;