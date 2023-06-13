
import usePopularInstructors from './../../../hooks/usePopularInstructors';
import InsCard from './InsCard';
const PopularInstructors = () => {
    const { popularInstructors } = usePopularInstructors();

    return <div className="grid md:grid-cols-3 gap-10 my-14" >{popularInstructors.map(pIns=><InsCard
    key={pIns._id}
    data={pIns}
    ></InsCard>)}</div>;
};

export default PopularInstructors;