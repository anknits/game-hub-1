import useGameTrailer from "../hooks/useGameTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstResult = data?.results[0];
  if (!firstResult) return null;

  return (
    <video poster={firstResult.preview} src={firstResult.data[480]} controls />
  );
};

export default GameTrailer;
