// // StatsPokemon.js
import { randomBgColor } from "../utils/Constants";

const StatsPokemon = ({ onClose, info }) => {
 
  return (
    <div className="text-black flex flex-col">
      {info?.map((stat) => (
        <div className="flex flex-row py-2 font-bold rounded-lg" key={stat?.stat?.name}>
          <h1>{stat?.stat?.name.toUpperCase()} - </h1>
          <h1 className="px-2 mr-0">{stat?.base_stat}</h1>
          <div className="border border-black  rounded-lg">
            <div className="w-40 mx-0.5 my-0.5  rounded-lg">
              <div
                className={`${randomBgColor()} m-0 h-5  rounded-lg`}
                style={{ width: `${stat.base_stat / 2.5}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Close Modal
      </button>
    </div>
  );
};

export default StatsPokemon;
