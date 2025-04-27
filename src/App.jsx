// Task 1: Setup API and App Structure
import React, { useState, useEffect } from 'react'; // Import React and hooks for state and side effects
import Gallery from './components/Gallery'; // Import the Gallery component

const App = () => {
  const [tours, setTours] = useState([]); // State to store the list of tours
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any error messages

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before fetching data
      setError(null); // Reset error state before fetching data
      try {
        const response = await fetch('https://course-api.com/react-tours-project'); // Fetch tours data from the API
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Throw an error if the response is not ok
        }
        const data = await response.json(); // Parse the JSON response
        setTours(data); // Update the tours state with the fetched data
      } catch (err) {
        setError(err.message); // Set the error state if an error occurs
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchTours(); // Call the fetchTours function when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Remove a tour by filtering it out
  };

  if (loading) return <h1>Loading...</h1>; // Display loading message while data is being fetched
  if (error) return <h1>Error: {error}</h1>; // Display error message if an error occurs

  return (
    <div>
      <h1>Tours</h1> {/* Display the title */}
      <Gallery tours={tours} onRemove={removeTour} /> {/* Render the Gallery component with tours data */}
    </div>
  );
};

export default App; // Export the App component as the default export