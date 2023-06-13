import usePopularClasses from './../../../hooks/usePopularClasses';
import Card from './../../Shared/Card/Card';
const PopularClasses = () => {
   const { popularClasses } = usePopularClasses();
    return <div className="grid md:grid-cols-3 gap-6 my-2 mb-3">
        {popularClasses.map(pc=><Card
    key={pc._id}
    pc={pc}
    ></Card>)}
    </div>;
};

export default PopularClasses;