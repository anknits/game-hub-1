import { Box, Heading, Text, Spinner, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailPage = () => {
  var { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Box>
        <Heading>{data?.name}</Heading>
        <ExpandableText limit={300}>{data?.description_raw}</ExpandableText>
        <GameAttributes gameDetails={data}></GameAttributes>
      </Box>
    </>
  );
};

export default GameDetailPage;
