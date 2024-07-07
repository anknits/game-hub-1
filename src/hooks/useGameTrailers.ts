import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import GameTrailer from "../entities/GameTrailer";
import ApiClient from "../services/api-client";

const useGameTrailer = (id: number) => {
  const apiClient = new ApiClient<GameTrailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameTrailer;
