import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink, useParams } from "react-router-dom";
import { accidentQuery } from "./";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiCalendar, FiExternalLink, FiMapPin } from "react-icons/fi";
import { BsCheck2, BsPen } from "react-icons/bs";

const statusColor = {
  deadly: "red.500",
  danger: "orange.500",
  normal: "blue.500",
  unkown: "gray.800",
};

function View() {
  const { id } = useParams();
  const { data: accident } = useQuery(accidentQuery(id));
  const googleMapLink = `https://maps.google.com/?q=${accident.unit.location.latt},${accident.unit.location.long}`;

  return (
    <>
      <Stack
        mt={6}
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
      >
        <Heading as="h1">{accident.title}</Heading>
        <ButtonGroup isAttached>
          <RouterLink to="./edit">
            <Button size="sm" leftIcon={<Icon as={BsPen} />}>
              Edit
            </Button>
          </RouterLink>
        </ButtonGroup>
      </Stack>

      <Text mt={4} color="gray.600">
        {accident.description}
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

        <Grid w="full" mt={4} gap={4} gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
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

export default View;
