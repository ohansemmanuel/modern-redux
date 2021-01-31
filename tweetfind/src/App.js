import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import { Finder } from "./features/finder/Finder";
import { NumberOfResults } from "./features/numberOfResults/NumberOfResults";

function App() {
  return (
    <Container>
      <Heading as="h1" size="xl" my={16} textAlign="center" color="purple.700">
        Welcome to TweetFind!
      </Heading>
      <Finder />
      <NumberOfResults />
    </Container>
  );
}

export default App;
