/* eslint-disable no-unused-vars */
import { Rotate } from "react-awesome-reveal";
const insCard = ({ data }) => {
  const { name, image, email } = data;

  return (
    <Rotate>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <p>Email: {email} </p>
        </div>
      </div>
    </Rotate>
  );
};

export default insCard;
