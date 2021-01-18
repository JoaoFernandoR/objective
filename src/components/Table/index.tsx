import { useContext } from "react";
import { MarvelContext } from "../../context/marvelContext";

import "./Table.scss";

import MarvelList from "./MarvelList";
import Pagination from "../Pagination/";

const Table = () => {
  const { data } = useContext(MarvelContext);

  return (
    <section id="table">
      <div className="container_list">
        <div className="titles">
          <h3 className="character"> Character </h3>
          <h3 className="series"> Series </h3>
          <h3 className="eventos"> Events </h3>
        </div>
        <ul>
          {data.results?.length === 0 ? (
            <div className="didnt-found"> No Character found, try again </div>
          ) : (
            <MarvelList data={data.results} />
          )}
        </ul>
        <Pagination />
      </div>
    </section>
  );
};

export default Table;
