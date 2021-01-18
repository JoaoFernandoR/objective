import "./MarvelItem.scss";

import { Link } from "react-router-dom";

interface SerieItem {
  name: string;
}
interface Series {
  items: SerieItem[];
}
interface Thumbnail {
  path: string;
  extension: string;
}
interface Props {
  name: string;
  thumbnail: Thumbnail;
  series: Series;
  events: Series;
  id: number;
}

const Marvelitem = (props: Props) => {
  const { name, thumbnail, series, events, id } = props;

  const link = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Link className="char-item" to={`/detail/${id}`}>
      <div className="char-name">
        <img src={link} alt="Personagem da Marvel" className="img" />
        <h4 className="char-title"> {name}</h4>
      </div>
      <div className="series">
        {series.items.map((item: SerieItem, index) => (
          <h5 key={index}>{item.name}</h5>
        ))}
      </div>
      <div className="series eventos">
        {events.items.map((item: SerieItem, index) => (
          <h5 key={index}>{item.name}</h5>
        ))}
      </div>
    </Link>
  );
};

export default Marvelitem;
