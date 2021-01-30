const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";
const URI = "https://api.twitter.com/2/tweets/search/recent?query=";
const bearer = "Bearer " + process.env.REACT_APP_TOKEN;

/**
 *
 * @param {*} query - string
 */
export const findTweets = async (searchQuery, amount) => {
  const response = await fetch(
    `${CORS_ANYWHERE}${URI}${searchQuery}&max_results=${amount}`,
    {
      headers: {
        Authorization: bearer,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Network wasn't ok!`);
  }

  return await response.json().then((val) => val.data);
};
