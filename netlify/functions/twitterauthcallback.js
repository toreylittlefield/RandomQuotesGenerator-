import { config, sourceURL, authTokens } from './utils/auth-config';
import { getAuthToken } from './utils/get-auth-token';
import fetch from 'node-fetch';

exports.handler = async (event, context) => {
  try {
    const code = event.queryStringParameters.code;
    // no code user is unauthorized
    if (!code) {
      return {
        statusCode: 401,
        'Cache-Control': 'no-cache',
        body: JSON.stringify({ message: 'Unauthorized' }),
      };
    }
    // add code from twitter & exchange for access token
    const tokenRes = await getAuthToken(config, code);

    //
    console.table(tokenRes);
    authTokens.accessToken = tokenRes.access_token;
    console.table(authTokens);
    const getTweets = await fetch(`${sourceURL}/.netlify/functions/twitter_read_tweets`, {
      method: 'POST',
      body: JSON.stringify(authTokens),
    });
    const jsonData = await getTweets.json();
    console.log(jsonData);
    return {
      statusCode: 302,
      headers: {
        Location: `${sourceURL}/?${JSON.stringify(tokenRes)}`,
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
