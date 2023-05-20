import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink, useParams } from "react-router-dom";
import { accidentQuery } from "./loader";
import fallbackSrc from "~assets/accident-fallback.jpg";
import Carousel from "./Carousel";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiCalendar, FiExternalLink, FiMapPin } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";

const statusColor = {
  deadly: "red.500",
  danger: "orange.500",
  normal: "blue.500",
  unkown: "gray.800",
};

function Accident() {
  const { id } = useParams();
  const { data: accident } = useQuery(accidentQuery(id));

  accident.unit = { location: { latt: 30.605726, long: 31.779532 } }; // TODO: shoudl be implement in the backend
  const googleMapLink = `https://maps.google.com/?q=${accident.unit.location.latt},${accident.unit.location.long}`;

  return (
    <>
      <Carousel
        images={[
          accident.imag ?? fallbackSrc,
          "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        ]}
      />
      <Heading mt={6} as="h1">
        Accident on the main road
      </Heading>
      <Text mt={4} color="gray.600">
        An accident is detected by cameras on the road X, it is likely that a quick action should be
        taken
      </Text>

      <HStack mt={3} color="white">
        <Text borderRadius="50px" px={3} bg="gray.500" fontSize="xs">
          {accident.handled ? "handled" : "not handled"}
        </Text>
        <Text
          borderRadius="50px"
          px={3}
          bg={statusColor[accident.status] ?? "gray.500"}
          fontSize="xs"
        >
          {accident.status.toLowerCase()}
        </Text>
      </HStack>

      <Flex direction="column" gap={3} mt={6} color="gray.700">
        <HStack>
          <Icon as={FiCalendar} />
          <Text w="150px">Date</Text>
          <Text>{new Date(accident.datetime).toLocaleString()}</Text>
        </HStack>

        <HStack>
          <Icon as={FiMapPin} />
          <Text w="150px">Location</Text>
          <Link as={RouterLink} to={googleMapLink} color="blue.500">
            {accident.unit.location.latt}, {accident.unit.location.long}
            <Icon ml={2} as={FiExternalLink} />
          </Link>
        </HStack>

        <Grid
          w="full"
          mt={4}
          gap={4}
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        >
          <Button size="lg" colorScheme="blue">
            Send Ambulance
          </Button>
          <Button size="lg" colorScheme="red">
            Send Firetruck
          </Button>
          <Button size="lg" colorScheme="green" leftIcon={<Icon as={BsCheck2} />}>
            Done
          </Button>
        </Grid>
      </Flex>
    </>
  );
}

export default Accident;
