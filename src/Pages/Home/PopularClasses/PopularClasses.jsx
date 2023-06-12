import usePopularClasses from './../../../hooks/usePopularClasses';
import CardPopularClass from './CardPopularClass';
const PopularClasses = () => {
   const { popularClasses } = usePopularClasses();
    return <div className="grid md:grid-cols-3 gap-6 my-2 mb-3">
        {popularClasses.map(pc=><CardPopularClass
    key={pc._id}
    pc={pc}
    ></CardPopularClass>)}
    </div>;
};

export default PopularClasses;