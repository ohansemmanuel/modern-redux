import React, { useState } from "react";
import TweetEmbed from "react-tweet-embed";
import { useSelector, useDispatch } from "react-redux";
import {
  Flex,
  Input,
  IconButton,
  Wrap,
  WrapItem,
  Stack,
  Skeleton,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { NumberOfResults } from "../numberOfResults/NumberOfResults";
import { fetchTweets } from "./finderSlice";

export function Finder() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const { tweets, isLoading, error } = useSelector((state) => state.finder);
  const numberOfResults = useSelector((state) => state.numberOfResults);

  const handleSearch = async () => {
    if (searchValue) {
      dispatch(fetchTweets({ searchValue, numberOfResults }));
      setSearchValue("");
    }
  };

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>An Error occurred!</AlertTitle>
        <AlertDescription>
          We couldn't fetch tweets right now. Please try again later.
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  }

  return (
    <>
      <Flex alignItems="center">
        <Input
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder="enter a theme or hashtag to search"
          size="lg"
          mr={3}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={handleSearch}
        />
      </Flex>
      <NumberOfResults />

      {isLoading && (
        <Stack mt={5}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}

      <Wrap mt={5}>
        {tweets.map((tweet) => (
          <WrapItem key={tweet.id}>
            <TweetEmbed id={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
