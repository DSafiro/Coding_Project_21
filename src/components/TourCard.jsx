// Task 2: Build the TourCard component
import React from 'react'; // Imports react

const TourCard = ({ tour, onRemove }) => {
  const { name, info, image, price } = tour; // Destructure tour properties

  return (
    <div className="tour-card"> {/* Card container */}
      <img src={image} alt={name} className="tour-image" /> {/* Tour image */}
      <div className="tour-details"> {/* Tour details container */}
        <h2>{name}</h2> {/* Tour name */}
        <p>{info}</p> {/* Tour info */}
        <h3>${price}</h3> {/* Tour price */}
        <button onClick={() => onRemove(tour.id)} className="not-interested-button">
          Not Interested
        </button> {/* Button to remove the tour */}
      </div>
    </div>
  );
};

export default TourCard; // Exports the TourCard component