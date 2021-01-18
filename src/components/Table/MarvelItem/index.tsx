import "./MarvelItem.scss";

import { Link } from "react-router-dom";

import { Props, SerieItem } from "./interfaces";

const Marvelitem = (props: Props) => {
  const { name, thumbnail, series, events, id } = props;

  const link = `${thumbnail.path}.${thumbnail.extension}`;

  const renderSeries = () => {
    const newSeries = [...series.items];
    newSeries.splice(3, series.items.length);
    return newSeries.map((item: SerieItem, index: number) => {
      return <h5 key={index}>{item.name}</h5>;
    });
  };

  const renderEventos = () => {
    const newSeries = [...events.items];
    newSeries.splice(3, events.items.length);
    return newSeries.map((item: SerieItem, index: number) => {
      return <h5 key={index}>{item.name}</h5>;
    });
  };

  return (
    <Link className="char-item" to={`/detail/${id}`}>
      <div className="char-name">
        <img src={link} alt="Personagem da Marvel" className="img" />
        <h4 className="char-title"> {name}</h4>
      </div>
      <div className="series">
        {renderSeries()}
        {series.items.length > 3 ? "..." : ""}
      </div>
      <div className="series eventos">
        {renderEventos()}
        {events.items?.length > 3 ? "..." : ""}
        {/* {events.items.map((item: SerieItem, index) => (
          <h5 key={index}>{item.name}</h5>
        ))} */}
      </div>
    </Link>
  );
};

export default Marvelitem;
