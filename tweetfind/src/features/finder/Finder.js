import React, { useState } from "react";
import { Flex, Input, IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import TweetEmbed from "react-tweet-embed";
import { SearchIcon } from "@chakra-ui/icons";
import { findTweets } from "./findTweets";

export function Finder() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    if (searchValue) {
      setSearchValue("");
      const data = await findTweets(searchValue);
      setData(data);
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
      <Wrap mt={5}>
        {data.map((tweet) => (
          <WrapItem key={tweet.id}>
            <TweetEmbed id={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
