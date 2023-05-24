import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import AccidentTabs from "./Tabs";
import { accidentsQuery } from "./loader";
import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink } from "react-router-dom";
import AccidentCard from "./AccidentCard";
import useWebsocketMessage from "~/hooks/useWebsocketMessage";

const newSet = new Set();

function Accidents() {
  const { data: accidents } = useQuery(accidentsQuery);
  const [activeTab, setActiveTab] = useState("current");
  const [newAccidents, setNewAccidents] = useState([]);

  const grouped = useMemo(() => {
    const past = accidents.filter((acc) => acc.handled);
    const current = accidents.filter((acc) => !acc.handled);
    past.reverse(); // get the most recent at the top
    current.reverse();
    return { past, current };
  }, [accidents]);

  useEffect(() => {
    console.log("accidents changed");
    setNewAccidents([]);
  }, [accidents]);

  useWebsocketMessage(
    useCallback((event) => {
      const { commands, accident } = JSON.parse(event.data).message;
      if (commands == "new_accident") {
        newSet.add(accident.id);
        setNewAccidents((old) => [accident, ...old]);
      }
    }, [])
  );

  return (
    <>
      <Box as="header">
        <Heading as="h1" mb={12}>
          Emergency Cases
        </Heading>
      </Box>
      <Box as="main">
        <AccidentTabs
          past={grouped.past.length}
          current={grouped.current.length + newAccidents.length}
          onChange={(activeTab) => setActiveTab(activeTab)}
        />
      </Box>
      <VStack spacing={8} mt={4}>
        {activeTab == "current" &&
          newAccidents.length > 0 &&
          newAccidents.map((acc) => (
            <Box key={acc.id} w="full">
              <RouterLink to={`/accidents/${acc.id}`}>
                <AccidentCard recent {...acc} />
              </RouterLink>
            </Box>
          ))}
        {grouped[activeTab].map((acc) => (
          <Box key={acc.id} w="full">
            <RouterLink to={`/accidents/${acc.id}`}>
              <AccidentCard recent={newSet.has(acc.id)} {...acc} />
            </RouterLink>
          </Box>
        ))}
      </VStack>
    </>
  );
}

export default Accidents;
