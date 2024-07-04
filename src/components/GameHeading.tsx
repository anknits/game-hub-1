import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data: genres } = useGenres();
  const genreName = genres?.results.find((x) => x.id == genreId)?.name;

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: platforms } = usePlatforms();
  const platFormName = platforms?.results.find((x) => x.id == platformId)?.name;

  const heading = `${platFormName || ""} ${genreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
