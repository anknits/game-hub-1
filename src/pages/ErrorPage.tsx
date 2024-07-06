import { Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <h1>Oops</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : "An unexpected error occured"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
