
import { Helmet } from 'react-helmet-async';
import useClasses from './../../hooks/useClasses';
import Card from './../Shared/Card/Card';

const Classes = () => {
    const {classes} = useClasses();
    console.log(classes)
    return (
      <div className="sm:container sm:mx-auto">
        <Helmet>
          <title>Classes | DanceScape </title>
        </Helmet>
        <div className="grid md:grid-cols-3 mb-7 gap-10">
          {classes.map((c) => (
            <Card key={c._id} pc={c}></Card>
          ))}
        </div>
      </div>
    );
};

export default Classes;