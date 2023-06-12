/* eslint-disable react/prop-types */

const CardPopularClass = ({ pc }) => {
    const { image, name, price, seats_available } = pc;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[300px]" src={image} alt="Dance class image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Available seats: {seats_available}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default CardPopularClass;