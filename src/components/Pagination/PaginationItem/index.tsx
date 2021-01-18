import { useContext } from "react";
import { MarvelContext } from "../../../context/marvelContext";

import "./PaginationItem.scss";

const PaginationItem = ({ item }: any) => {
  const { handlePagination, activePage } = useContext(MarvelContext);

  if (item > 5 && item < 100) {
    return <div></div>;
  } else {
    return (
      <button
        className={`pagination-item ${
          activePage / 10 === item ? "active" : "inactive"
        }`}
        onClick={() => handlePagination(item * 10)}
        key={item}
      >
        {item + 1}
      </button>
    );
  }
};

export default PaginationItem;
