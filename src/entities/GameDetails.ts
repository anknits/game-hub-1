import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}
