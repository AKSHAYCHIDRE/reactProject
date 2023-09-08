import Reviews from "./reviews/reviews";

const App = () => {
  return (
    <>
      <h1 className="pageTitle">Our Reviews</h1>
      <div className="testimonial-container">
        <Reviews />
      </div>
    </>
  );
};

export default App;
