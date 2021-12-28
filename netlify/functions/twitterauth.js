exports.handler = async (event, context) => {
  try {
    const CLIENT_ID = process.env.REACT_APP_TWITTER_CLIENT_ID;
    const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=http://localhost:8888/.netlify/functions/twitterauthcallback&scope=tweet.read%20users.read%20follows.read&state=state&code_challenge=challenge&code_challenge_method=plain`;
    return {
      statusCode: 302,
      headers: {
        Location: url,
      },
      'Cache-Control': 'no-cache',
      body: null,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message || error }),
    };
  }
};
