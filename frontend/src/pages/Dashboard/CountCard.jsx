import PropTypes from "prop-types";
import { Text, Heading, Button, HStack, Box } from "@chakra-ui/react";
import compressNumber from "../../utils/compress-number";
import { Link } from "react-router-dom";

export default function CountCard({ children }) {
  return <Box>{children}</Box>;
}

CountCard.propTypes = {
  children: PropTypes.node,
};

export function CardTitle({ title, count, color }) {
  return (
    <Box>
      <HStack>
        <Heading as="span" size="lg" flexBasis={{ base: "150px", md: "200px" }}>
          {title}
        </Heading>
        <Heading ml={8} as="span" size="xl" color={color}>
          {compressNumber(count)}
        </Heading>
      </HStack>
      <Text mt={1} color="gray.600">
        for past 24 hours
      </Text>
    </Box>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  color: PropTypes.string,
};

export function CardButton({ caption, color, link }) {
  return (
    <Link to={link}>
      <Button
        mt={8}
        colorScheme={color}
        width={{ base: "300px", lg: "350px" }}
        height={{ base: "120px", lg: "160px" }}
        boxShadow="2xl"
      >
        {caption}
      </Button>
    </Link>
  );
}

CardButton.propTypes = {
  link: PropTypes.string,
  caption: PropTypes.string,
  color: PropTypes.string,
};
