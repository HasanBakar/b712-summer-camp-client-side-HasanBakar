import usePopularInstructors from './../../../hooks/usePopularInstructors';
import InsCard from './../../Shared/InsCard/InsCard';



const PopularInstructors = () => {
    const { popularInstructors } = usePopularInstructors();

    return (
      <div className="grid md:grid-cols-3 gap-10 my-14">
        {
        popularInstructors.map(pins=><InsCard
        key={pins._id}
        data={pins} ></InsCard>)
        }
      </div>
    );
};

export default PopularInstructors;