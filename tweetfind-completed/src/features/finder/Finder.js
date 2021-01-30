import React, { useState } from "react";
import {
  Flex,
  Input,
  IconButton,
  Wrap,
  WrapItem,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import TweetEmbed from "react-tweet-embed";
import { SearchIcon } from "@chakra-ui/icons";
import { fetchTweets } from "./finderSlice";
import { NumberOfResults } from "../numberOfResults";

export function Finder() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const { tweets = [], isLoading } = useSelector((state) => state.finder);
  const numberOfResults = useSelector((state) => state.numberOfResults);

  const handleSearch = async () => {
    if (searchValue && numberOfResults) {
      dispatch(fetchTweets({ searchValue, numberOfResults }));
      setSearchValue("");
    }
  };

  return (
    <>
      <Flex alignItems="center">
        <Input
          mr={3}
          size="lg"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder="enter a theme or hashtag to search"
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          onClick={handleSearch}
          icon={<SearchIcon />}
          type="submit"
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
        {!isLoading &&
          tweets.map((tweet) => (
            <WrapItem key={tweet.id}>
              <TweetEmbed id={tweet.id} />
            </WrapItem>
          ))}
      </Wrap>
    </>
  );
}
