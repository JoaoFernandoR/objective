import { useEffect, useState } from "react";

import "./Detail.scss";

import api from "../../services/api";

import { AiOutlineLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

interface Char {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  stories: {
    available: number;
  };
  events: {
    available: number;
  };
  description: string;
}

const Detail = () => {
  const [char, setChar] = useState<Char | null>(null);
  const [comics, setComics] = useState<any>([]);
  const { charID } = useParams<any>();

  useEffect(() => {
    const getCharById = async () => {
      await api
        .get(
          `http://gateway.marvel.com/v1/public/characters/${charID}?&ts=1556322834&apikey=5d565b9ada79917a3b7d4955503ba2b3&hash=e17fd454cbef5833153cb0c5a847a49c`
        )
        .then((response) => {
          setChar(response.data.data.results[0]);

          api
            .get(
              `http://gateway.marvel.com/v1/public/characters/${charID}/comics?limit=10&ts=1556322834&apikey=5d565b9ada79917a3b7d4955503ba2b3&hash=e17fd454cbef5833153cb0c5a847a49c`
            )
            .then((response) => {
              setComics(response.data.data.results);
            });
        })
        .catch((err) => console.log(err));
    };
    getCharById();
  }, [charID]);

  const link = `${char?.thumbnail.path}.${char?.thumbnail.extension}`;

  const renderComics = () => {
    return comics?.map((item: any, index: any) => {
      const comiclink = `${item.thumbnail.path}.${item.thumbnail.extension}`;

      return (
        <div className="comic-image" key={index}>
          <div className="container-img">
            <img src={comiclink} alt="Character" className="char-img" />
          </div>
          <div className="comic-info">
            <h1 className="comic-title">{item?.title}</h1>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="detail">
      <div className="container-detail">
        <Link to="/" className="icon-left">
          <AiOutlineLeft color="#feca0d" size={24} className="icon" />
        </Link>
        <div className="info-image">
          <div className="container-img">
            <img src={link} alt="Character" className="char-img" />
          </div>
          <div className="info">
            <h1 className="title">{char?.name}</h1>
            <p> {char?.description}</p>
          </div>
        </div>
        <div className="more-info">
          <h3 className="title"> Appearances </h3>
          <div className="both">
            <h3> Comics </h3>
            <p className="value">
              {char?.comics.available === 0
                ? "No appearances"
                : char?.comics.available}
            </p>
          </div>
          <div className="both">
            <h3> Stories </h3>
            <p className="value">
              {char?.stories.available === 0
                ? "No appearances"
                : char?.stories.available}
            </p>
          </div>
          <div className="both">
            <h3> Events </h3>
            <p className="value">
              {char?.events.available === 0
                ? "No appearances"
                : char?.events.available}
            </p>
          </div>
        </div>
        <div className="title-comics">
          Some of the Comics that {char?.name} appears
        </div>
        {renderComics()}
      </div>
    </section>
  );
};

export default Detail;
