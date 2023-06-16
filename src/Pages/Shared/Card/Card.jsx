/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { AuthContext } from './../../../Providers/AuthProviders';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';



const Card = ({ pc }) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const {user}= useContext(AuthContext);
  const navigate = useNavigate()
  const { image, name, price, seats_available, instructor } = pc;
  const [controlSeat, setControlSeat] = useState(seats_available);

  const handleSelectedClasses = item =>{
    const { image, name, price, _id } = item;
    if(!user?.email){
      toast.warn("🦄 Please login before select the course!", {
        position: "top-center",
        autoClose: 5001,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    }
   else{
     const courseItem = {image, name, price, email:user?.email, itemId: _id};

     

    fetch("http://localhost:5000/selectedCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          const temp = seats_available - 1;
          setControlSeat(temp);
          setButtonDisabled(true);
          toast.success("The course successfully selected!", {
            position: "top-center",
            autoClose: 5001,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
   }
  }




  return (
    <Slide>
      <div
        className={`card w-96 bg-${
          controlSeat === 0 ? "red" : "base"
        }-500 shadow-xl`}
      >
        <figure>
          <img className="h-[300px]" src={image} alt="Dance class image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dance Type: {name}</h2>
          <h3>Instructor: {instructor}</h3>
          <p>Price: ${price}</p>
          <p>Available seats: {controlSeat}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelectedClasses(pc)}
              disabled={isButtonDisabled}
              className={`btn ${
                isButtonDisabled || controlSeat === 0
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