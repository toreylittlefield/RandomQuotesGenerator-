const { sourceURL, config, availableScopes } = require('./utils/auth-config');

exports.handler = async (event, context) => {
  try {
    const scopes = Object.keys(availableScopes)
      // .slice(0, 4)
      .map((key) => {
        return encodeURIComponent(availableScopes[key]);
      })
      .join('%20');
    console.log({ scopes }, 'scopes');
    // const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${sourceURL}/.netlify/functions/twitterauthcallback&scope=tweet.read%20users.read%20follows.read&state=state&code_challenge=challenge&code_challenge_method=plain`;
    const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${sourceURL}/.netlify/functions/twitterauthcallback&scope=${scopes}&state=state&code_challenge=challenge&code_challenge_method=plain`;
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
