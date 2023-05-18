import { Heading, Box, Text, HStack, Grid } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

function RouteError() {
  const error = useRouteError();
  console.error(error);

  return (
    <Grid placeContent="center" height="100vh">
      <Heading as="h1">Oops!</Heading>
      <Text mt={2} color="gray.600">Sorry, an unexpected error has occurred.</Text>
      <Text mt={4} color="red.600">                      
        <i>{error.statusText || error.message}</i>       
      </Text>                                            
    </Grid>                                              
  );                                                       
}

export default RouteError;
