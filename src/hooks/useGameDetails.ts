import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";

export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
}

const useGameDetails = (slug: string) => {
  const apiClient = new ApiClient<GameDetails>("/games/" + slug);
  return useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: apiClient.get,
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
