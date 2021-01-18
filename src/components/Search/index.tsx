import { FormEvent, useState, ChangeEvent, useContext } from "react";
import { FiSearch } from "react-icons/fi";

import { MarvelContext } from "../../context/marvelContext";

import "./Search.scss";

const Search = () => {
  const [personagem, setPersonagem] = useState("");
  const { getSingleCharacter } = useContext(MarvelContext);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonagem(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (personagem === "") return;

    getSingleCharacter(personagem);
  };

  return (
    <section id="search">
      <form onSubmit={handleSubmit} className="input-block">
        <input
          type="text"
          name="search"
          placeholder="Nome do personagem..."
          className="input"
          value={personagem}
          onChange={handleInput}
        />
        <button type="submit" className="buscar">
          <FiSearch size={22} className="icon" />
        </button>
      </form>
    </section>
  );
};

export default Search;
