import "./categories.css";

const Categories = ({ filterItems, allCategories }) => {

  return (
    <ul className="categoryList">
      {allCategories.map((category, index) => {
        return (
          <li key={index} className="categoryItem">
            {/* <button onClick={() => filterItems(category)} className="categoryItemButton"> */}
            <button onClick={() => filterItems(category)} className={`categoryItemButton ${filterItems ? 'ss' : 'asdfa'}`}>
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
