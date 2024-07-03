import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genreName = genres?.results.find(
    (x) => x.id == gameQuery.genreId
  )?.name;

  const { data: platforms } = usePlatforms();
  const platFormName = platforms?.results.find(
    (x) => x.id == gameQuery.platformId
  )?.name;

  const heading = `${platFormName || ""} ${genreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
