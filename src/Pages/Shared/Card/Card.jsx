/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";
// import axios from "axios";
import { AuthContext } from './../../../Providers/AuthProviders';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';



const Card = ({ pc }) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const {user}= useContext(AuthContext);
  const navigate = useNavigate()
    const { image, name, price, seats_available, instructor } = pc;

  const handleSelectedClasses = item =>{
    if(!user?.email){
      navigate("/login")
    }
   else{
     console.log(item);
      setButtonDisabled(true);
   }
  }




  return (
    <Slide>
      <div
        className={`card w-96 bg-${
          seats_available === 0 ? "red" : "base"
        }-300 shadow-xl`}
      >
        <figure>
          <img className="h-[300px]" src={image} alt="Dance class image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dance Type: {name}</h2>
          <h3>Instructor: {instructor}</h3>
          <p>Price: ${price}</p>
          <p>Available seats: {seats_available}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelectedClasses(pc)}
              disabled={isButtonDisabled}
              className={`btn ${
                isButtonDisabled
                  ? "btn btn-disabled"
                  : "btn-outline btn-secondary border-0 border-b-4"
              }`}
            >
              select to Favorite
            </button>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Card;