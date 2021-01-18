import { useContext } from "react";
import { MarvelContext } from "../../context/marvelContext";

import "./Table.scss";

import MarvelList from "./MarvelList";
import NewPagination from "../NewPagination";

const Table = () => {
  const { data } = useContext(MarvelContext);

  return (
    <section id="table">
      <div className="container_list">
        <div className="titles">
          <h3 className="character"> Personagem </h3>
          <h3 className="series"> Séries </h3>
          <h3 className="eventos"> Eventos </h3>
        </div>
        <ul>
          {data.results?.length === 0 ? (
            <div className="didnt-found">
              Nenhum personagem encontrado, tente novamente
            </div>
          ) : (
            <MarvelList data={data.results} />
          )}
        </ul>
      </div>
      <NewPagination />
    </section>
  );
};

export default Table;
