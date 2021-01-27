import React from "react";
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function Finder() {
  return (
    <>
      <Flex alignItems="center">
        <Input
          placeholder="enter a theme or hashtag to search"
          size="lg"
          mr={3}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </Flex>
    </>
  );
}
