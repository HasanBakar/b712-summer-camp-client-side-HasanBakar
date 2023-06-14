/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";


const Card = ({ pc }) => {
    const { image, name, price, seats_available, instructor } = pc;
  return (
    <Slide>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={image} alt="Dance class image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dance Type: {name}</h2>
          <h3>Instructor: {instructor}</h3>
          <p>Price: ${price}</p>
          <p>Available seats: {seats_available}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-secondary border-0 border-b-4">
              select to Favorite
            </button>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Card;