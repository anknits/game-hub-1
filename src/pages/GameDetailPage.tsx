import { Box, Heading, Text, Spinner, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailPage = () => {
  var { slug } = useParams();
  const { data: gameDetails, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error || !gameDetails) throw error;

  return (
    <>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          <Box>
            <Heading>{gameDetails?.name}</Heading>
            <ExpandableText limit={300}>
              {gameDetails?.description_raw}
            </ExpandableText>
            <GameAttributes gameDetails={gameDetails}></GameAttributes>
          </Box>
          <Box>
            <GameTrailer gameId={gameDetails.id} />
            <GameScreenshots gameId={gameDetails.id} />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GameDetailPage;
