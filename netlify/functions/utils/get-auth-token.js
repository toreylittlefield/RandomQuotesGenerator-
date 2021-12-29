const fetch = require('node-fetch').default;
// import fetch from 'node-fetch';

const getAuthToken = async ({ codeVerifier, clientId, redirectURI, grantType }, codeFromOAuth) => {
  try {
    const params = {
      code: codeFromOAuth,
      grant_type: grantType,
      client_id: clientId,
      redirect_uri: redirectURI,
      code_verifier: codeVerifier,
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
      return await twitterRes.json();
    } else {
      const json = await twitterRes.json();
      console.log({ json }, 'Bad Request');
      throw Error(json);
    }
  } catch (error) {
    console.error(error);
    return new Error(error.message);
  }
};

module.exports = { getAuthToken };
