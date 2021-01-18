import { useContext } from "react";
import { MarvelContext } from "../../context/marvelContext";

import "./Pagination.scss";

import PaginationItem from "./PaginationItem";

const Pagination = () => {
  const { totalPages } = useContext(MarvelContext);
  const paginationItems = Array.from(Array(totalPages).keys());

  return (
    <section id="pagination">
      {paginationItems.map((item) => (
        <PaginationItem item={item} key={item} />
      ))}
    </section>
  );
};

export default Pagination;
