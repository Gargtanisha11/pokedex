export const TYPE_POKEMON = "https://pokeapi.co/api/v2/type";

export const POKEMON_SEARCH="https://pokeapi.co/api/v2/pokemon/";

export const POKEMON_LIST_API =
  "https://pokeapi.co/api/v2/pokemon?limit=20&offset=";

export const POKEMON_TYPE_DETAIL="https://pokeapi.co/api/v2/type/";

export const IMG_API="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";

const BG_COLOR = [
  "bg-red-400",
  "bg-red-600",
  "bg-stone-700",
  "bg-orange-400",
  "bg-orange-700",
  "bg-amber-500",
  "bg-lime-400",
  "bg-emerald-500",
  "bg-teal-500",
];

export const TEXT_COLOR = [
  "text-red-400",
  "text-red-600",
  "text-stone-700",
  "text-orange-400",
  "text-orange-700",
  "text-amber-500",
  "text-lime-400",
  "text-emerald-500",
  "text-teal-500",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const randomBgColor = () => {
  return BG_COLOR[getRandomInt(9)];
};

export const randomTextColor = () => {
    return TEXT_COLOR[getRandomInt(10)];
  };
