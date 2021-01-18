import Marvelitem from "../MarvelItem";

import "./MarvelList.scss";

const MarvelList = ({ data }: any) => {
  return (
    <div>
      {data?.map((item: any, index: any) => (
        <Marvelitem
          name={item.name}
          thumbnail={item.thumbnail}
          series={item.series}
          events={item.events}
          key={index}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default MarvelList;
