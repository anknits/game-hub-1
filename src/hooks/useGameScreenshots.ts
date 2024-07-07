import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import GameScreenshots from "../entities/GameScreenshots";
import ApiClient from "../services/api-client";

const useGameScreenshots = (id: number) => {
  const apiClient = new ApiClient<GameScreenshots>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["gameScreenshots", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameScreenshots;
