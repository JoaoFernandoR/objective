import Pagination from "react-js-pagination";
import { useContext } from "react";

import { MarvelContext } from "../../context/marvelContext";

import "./NewPagination.scss";

const NewPagination = () => {
  const { handlePagination, activePage, totalPages } = useContext(
    MarvelContext
  );

  return (
    <div className="pagination">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={totalPages}
        pageRangeDisplayed={5}
        onChange={handlePagination}
        itemClass="pagination-item"
      />
    </div>
  );
};

export default NewPagination;
