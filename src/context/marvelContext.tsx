import { createContext, useEffect, useState } from "react";

import api from "../services/api";

export const MarvelContext = createContext({} as any);

const MarvelProvider = ({ children }: any) => {
  const [data, setData] = useState<any>([]);

  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [singleCharOffset, setSingleCharOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      console.log("singleCharOffSet", singleCharOffset);
      await api
        .get(
          `http://gateway.marvel.com/v1/public/characters?ts=1556322834&apikey=5d565b9ada79917a3b7d4955503ba2b3&hash=e17fd454cbef5833153cb0c5a847a49c&offset=${singleCharOffset}&limit=10`
        )
        .then((result) => {
          setData(result.data.data);
          setTotalPages(Math.ceil(result.data.data.total / 10));
        })
        .catch((err) => console.log(err.error));
    };
    fetchData();
  }, [singleCharOffset]);

  const getSingleCharacter = async (name: string) => {
    await api
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1556322834&apikey=5d565b9ada79917a3b7d4955503ba2b3&hash=e17fd454cbef5833153cb0c5a847a49c&offset=${singleCharOffset}&limit=10`
      )
      .then((response) => {
        setData(response.data.data);
        setTotalPages(Math.ceil(response.data.data.total / 10));
      })
      .catch((err) => console.log(err));
  };

  const handlePagination = (pageNumber: number) => {
    // Aqui estava o problema, quando chegava na pagina 1, mandava 10 como offSet, quando era pra mandar zero
    setSingleCharOffset((pageNumber - 1) * 10);
    setActivePage(pageNumber);
  };

  return (
    <MarvelContext.Provider
      value={{
        data,
        activePage,
        handlePagination,
        getSingleCharacter,
        singleCharOffset,
        setSingleCharOffset,
        totalPages: totalPages - 1,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export default MarvelProvider;
