const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";
const URI = "https://api.twitter.com/2/tweets/search/recent";
const bearer = "Bearer " + process.env.REACT_APP_TOKEN;

export const findTweets = async (searchQuery, amount) => {
  const response = await fetch(
    `${CORS_ANYWHERE}${URI}?query=${searchQuery}&max_results=${amount}`,
    {
      headers: {
        Authorization: bearer,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Response wasn't ok!`);
  }

  return await response.json().then((val) => val.data);
};
