// Task 3: Map Tours in a Gallery Component
import React from 'react';
import TourCard from './TourCard'; // Import the TourCard component

const Gallery = ({ tours, onRemove }) => {
  return (
    <div className="gallery"> {/* Gallery container */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} /> // Render a TourCard for each tour
      ))}
    </div>
  );
};

export default Gallery; // Export the Gallery component