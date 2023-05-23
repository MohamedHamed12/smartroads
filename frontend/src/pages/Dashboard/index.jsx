import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import useWebsocketMessage from "~/hooks/useWebsocketMessage";
import CountCard, { CardButton, CardTitle } from "./CountCard";
import { dashboardQuery } from "./loader";

function Dashboard() {
  const [carsCount, setCarsCount] = useState(0);
  const [accidents, setAccidents] = useState(0);
  const { data } = useQuery(dashboardQuery);

  useEffect(() => {
    setCarsCount(data.vehicle_last_24h);
    setAccidents(data.accident_last_24h);
  }, [data]);

  useWebsocketMessage(
    useCallback((event) => {
      const { commands } = JSON.parse(event.data).message;
      switch (commands) {
        case "new_vehicle":
          setCarsCount((old) => old + 1);
          break;
        case "new_accident":
          setAccidents((old) => old + 1);
          break;
      }
    }, [])
  );

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
            <CardTitle title="Cars Count" count={carsCount} color="green.500" />
            <CardButton caption="Cars Count Page" color="green" link="/cars-count" />
          </CountCard>
          <CountCard>
            <CardTitle title="Accidents" count={accidents} color="red.500" />
            <CardButton caption="Accidents Page" color="red" link="/accidents" />
          </CountCard>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
