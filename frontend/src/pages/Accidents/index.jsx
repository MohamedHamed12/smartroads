import { useMemo, useState } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import AccidentTabs from "./Tabs";
import { accidentsQuery } from "./loader";
import { useQuery } from "@tanstack/react-query";
import AccidentCard from "./AccidentCard";
import { Link } from "react-router-dom";

function Accidents() {
  const { data: accidents } = useQuery(accidentsQuery);
  const [activeTab, setActiveTab] = useState("current");

  const grouped = useMemo(() => {
    const past = accidents.filter((acc) => acc.handled);
    const current = accidents.filter((acc) => !acc.handled);
    return { past, current };
  }, [accidents]);

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
          current={grouped.current.length}
          onChange={(activeTab) => setActiveTab(activeTab)}
        />
      </Box>
      <VStack spacing={8} mt={4}>
        {grouped[activeTab].map((acc) => (
          <Link key={acc.id} to={`/accidents/${acc.id}`}>
            <AccidentCard {...acc} />
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default Accidents;
