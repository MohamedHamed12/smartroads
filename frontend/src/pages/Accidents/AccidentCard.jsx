import { CardBody, Card } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import PropTypes from "prop-types";
import getElapsedDate from "../../utils/get-elapsed-or-date";
import fallbackSrc from "../../assets/accident-fallback.jpg";

const statusColor = {
  deadly: "red.500",
  danger: "orange.500",
  normal: "blue.500",
  unkown: "gray.800",
};

function AccidentCard({ handled, status, imag, datetime, title, description, recent = false }) {
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      role="group"
    >
      <Image
        loading="lazy"
        objectFit="cover"
        fallbackSrc={fallbackSrc}
        src={imag ?? fallbackSrc}
        alt="Accident image taken by the unit camera"
        w={{ base: "100%", md: "300px" }}
      />
      <CardBody>
        <VStack spacing={3} alignItems="flex-start">
          <Heading
            as="h3"
            size="lg"
            display="flex"
            align="center"
            _groupHover={{ textDecoration: "underline" }}
          >
            <Text as="span">{title}</Text>
            {recent && (
              <Text
                as="span"
                borderRadius="50px"
                ms={3}
                py={2}
                px={3}
                bg="red.500"
                color="white"
                fontSize="md"
              >
                NEW
              </Text>
            )}
          </Heading>

          <HStack spacing="4px" color="gray.600">
            <Text fontSize="sm">Al Zakazik - Abou Kabir Road</Text>
            <Icon as={BsDot} w={6} h={6} color="gray.800" />
            <Text fontSize="sm">{new Date(datetime).toLocaleDateString()}</Text>
            <Icon as={BsDot} w={6} h={6} color="gray.800" />
            <Text fontSize="sm">{getElapsedDate(new Date(datetime))}</Text>
          </HStack>

          <HStack color="white">
            <Text borderRadius="50px" px={3} bg="gray.500" fontSize="xs">
              {handled ? "handled" : "not handled"}
            </Text>
            <Text borderRadius="50px" px={3} bg={statusColor[status] ?? "gray.500"} fontSize="xs">
              {status.toLowerCase()}
            </Text>
          </HStack>

          <Text py="2" color="gray.800">
            {description}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

AccidentCard.propTypes = {
  imag: PropTypes.string,
  datetime: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  handled: PropTypes.boolean,
  recent: PropTypes.boolean,
  status: PropTypes.oneOf(["deadly", "danger", "normal", "unkown"]),
};

export default AccidentCard;
