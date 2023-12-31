// // PokemonCard.js
import React, { useEffect, useState } from "react";
import ModalForStats from "./ModalForStats";
import { IMG_API, randomBgColor } from "../utils/Constants";
import StatsPokemon from "./StatsPokemon";

const PokemonCard = ({ info, }) => {
  const [detail, setDetail] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const onClick = () => {
    
    setIsModelOpen(!isModelOpen);
  };



  const fetchData = async () => {
    if (info && info.url) {
      try {
        const data = await fetch(info.url);
        const json = await data.json();
        setDetail(json);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [info?.url]);

  if (detail.length === 0) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      className={`${randomBgColor()} flex flex-row items-center rounded-2xl w-80 h-56 m-2 `}
    >
      <div className="text-center text-black flex flex-col">
        <span className="bg-white bg-opacity-40 text-white rounded-lg py-1 px-2 font-bold mb-2 mx-2">
          {info?.name.toUpperCase()}
        </span>
        {detail?.types.map((type) => (
          <span
            key={type.type?.name}
            className="bg-white bg-opacity-40 text-white rounded-lg py-1 px-1 font-semibold my-1 mx-2 w-fit"
          >
            {type.type?.name}
          </span>
        ))}
        <span className="bg-white bg-opacity-40 text-white rounded-lg w-fit px-2 font-bold mb-2 mx-2">
          {detail?.id}
        </span>
      </div>
      <img
        src={IMG_API + detail?.id + ".svg"}
        alt={info?.name}
        className="ml-8 w-2/4 pr-2 z-10"
      />

      {isModelOpen && (
        <ModalForStats
          isOpen={isModelOpen}
          onClose={onClick}
          setIsModelOpen={setIsModelOpen}
          info={detail.stats}
          contentComponent={StatsPokemon}
        />
      )}
    </div>
  );
};

export default PokemonCard;
