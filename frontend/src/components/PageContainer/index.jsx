import PropTypes from "prop-types";
import { Container } from "@chakra-ui/react";

function PageContainer({ children }) {
  return (
    <Container p={{ base: 4, md: 10 }} maxW="6xl">
      {children}
    </Container>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
