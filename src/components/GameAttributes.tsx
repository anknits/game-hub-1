import { SimpleGrid, Text } from "@chakra-ui/react";
import GameDetails from "../entities/GameDetails";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  gameDetails: GameDetails;
}

const GameAttributes = ({ gameDetails }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefinitionItem term="Platforms">
        {gameDetails.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {gameDetails.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <CriticScore score={gameDetails.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {gameDetails.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
