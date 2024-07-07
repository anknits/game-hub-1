import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import { GameDetails } from "../entities/GameDetails";

const useGameDetails = (slug: string) => {
  const apiClient = new ApiClient<GameDetails>("/games/" + slug);
  return useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: apiClient.get,
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
