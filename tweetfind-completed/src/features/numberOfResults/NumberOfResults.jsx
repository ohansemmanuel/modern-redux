import React from "react";
import { Flex, Stack, RadioGroup, Radio, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfResults } from "./numberOfResultsSlice";

export const NumberOfResults = () => {
  const dispatch = useDispatch();
  const numberOfResults = useSelector((state) => state.numberOfResults);

  const onChange = (val) => {
    dispatch(setNumberOfResults(val));
  };

  return (
    <Flex my={4} justifyContent="center">
      <Text mr={3}>Number of results:</Text>
      <RadioGroup onChange={onChange} value={numberOfResults} defaultValue={10}>
        <Stack spacing={4} direction="row">
          <Radio value="10">10 tweets</Radio>
          <Radio value="15">15 tweets</Radio>
          <Radio value="20">20 tweets</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
