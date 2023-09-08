import { useEffect, useState } from "react";
import Loading from "./loader/loading";
import Tours from './tours/tours';

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const feachTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    feachTours();
  }, []);

  if (tours.length === 0) {
    return (
      <div className="noToursDataWrapper">
        <h2 className="pageTitle">No Tours Left</h2>
        <button className="refershButton" onClick={feachTours}>Refersh</button>
      </div>
    );
  }

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="container">
      <h1 className="pageTitle">Our Tours</h1>
      <div className="toursList">
        {tours.map((tour) => {
          return (
            <Tours
              key={tour.id}
              id={tour.id}
              name={tour.name}
              info={tour.info}
              image={tour.image}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
