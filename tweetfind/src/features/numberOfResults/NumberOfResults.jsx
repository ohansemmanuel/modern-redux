import React from "react";
import { Flex, Stack, RadioGroup, Radio, Text } from "@chakra-ui/react";

export const NumberOfResults = () => {
  return (
    <Flex my={4} justifyContent="center">
      <Text mr={3}>Number of results:</Text>
      <RadioGroup defaultValue={10}>
        <Stack spacing={4} direction="row">
          <Radio value="10">10 tweets</Radio>
          <Radio value="15">15 tweets</Radio>
          <Radio value="20">20 tweets</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
