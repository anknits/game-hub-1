import { Box, Heading, Text, Spinner } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
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
        <Text>{data?.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailPage;
