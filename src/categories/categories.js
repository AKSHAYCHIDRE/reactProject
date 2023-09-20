import { useState } from "react";
import "./categories.css";

const Categories = ({ filterItems, allCategories }) => {
const [active, setActive] = useState(null);

const handleClick = (category) => {
  setActive(category);
  filterItems(category);
}

  return (
    <ul className="categoryList">
      {allCategories.map((category, index) => {
        return (
          <li key={index} className="categoryItem">
            <button onClick={() => handleClick(category)} className={`categoryItemButton ${ active === category ? 'active' : ''}`}>
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
