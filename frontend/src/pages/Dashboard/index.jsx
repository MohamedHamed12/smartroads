import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import CountCard, { CardButton, CardTitle } from "./CountCard";
import { dashboardQuery } from "./loader";

function Dashboard() {
  const { data } = useQuery(dashboardQuery);

  console.log(data)

  return (
    <>
      <Box as="header">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "flex-end" }}
          gap={2}
        >
          <Heading as="h1" size="4xl">
            Dashboard
          </Heading>
          <Heading as="span" size="md" color="gray.600">
            Smart Roads
          </Heading>
        </Flex>
      </Box>
      <Box as="main" mt={{ base: 6, md: 12 }} p={6} mx={-6} bg="gray.100">
        <Grid
          gridTemplateColumns={{ base: "auto", md: "auto auto" }}
          placeContent={{ sm: "center", md: "initial" }}
          gap={10}
        >
          <CountCard>
            <CardTitle title="Cars Count" count={data.verticals_last_24h} color="green.500" />
            <CardButton caption="Cars Count Page" color="green" link="/cars-count" />
          </CountCard>
          <CountCard>
            <CardTitle title="Accidents" count={data.accident_last_24h} color="red.500" />
            <CardButton caption="Accidents Page" color="red" link="/accidents" />
          </CountCard>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
