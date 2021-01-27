const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";
const URI = "https://api.twitter.com/2/tweets/search/recent?query=";
const bearer = "Bearer " + process.env.REACT_APP_TOKEN;

/**
 *
 * @param {*} query - string
 */
export const findTweets = async (query) => {
  return await fetch(`${CORS_ANYWHERE}${URI}${query}`, {
    headers: {
      Authorization: bearer,
    },
  })
    .then((res) => res.json())
    .then((val) => val.data);
};
