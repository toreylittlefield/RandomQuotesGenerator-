import fetch from 'node-fetch';

exports.handler = async (event, context) => {
  try {
    const code = event.queryStringParameters.code;
    if (!code) {
      return {
        statusCode: 401,
        'Cache-Control': 'no-cache',
        body: JSON.stringify({ message: 'Unauthorized' }),
      };
    }
    const CLIENT_ID = process.env.REACT_APP_TWITTER_CLIENT_ID;
    const params = {
      code: code,
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: 'http://localhost:8888/.netlify/functions/twitterauthcallback',
      code_verifier: 'challenge',
    };
    const searchParams = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      })
      .join('&');

    const twitterUrl = `https://api.twitter.com/2/oauth2/token`;
    const twitterRes = await fetch(twitterUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: searchParams,
    });
    if (twitterRes.ok) {
      const json = await twitterRes.json();
      console.log({ json, res: twitterRes.statusText });
      const getTweets = await fetch('http://localhost:8888/.netlify/functions/twitter_read_tweets', {
        method: 'POST',
        body: JSON.stringify(json),
      });
      const jsonData = await getTweets.json();
      console.log(jsonData);
      return {
        statusCode: 302,
        headers: {
          Location: `http://localhost:8888?${JSON.stringify(json)}`,
        },
        'Cache-Control': 'no-cache',
        body: null,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message || error }),
    };
  }
};
