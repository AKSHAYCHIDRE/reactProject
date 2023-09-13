import According from "./according/according";
import data from "./according/data";
import "../src/index.css";

function App() {
  return (
    <div className="container">
      <h1 className="pageTitle">Accordin Functionality</h1>
      <div className="accordingWrapper">
        {data.map((question) => {
          return <According key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
}

export default App;
