const sourceURL = process.env.NODE_ENV === 'production' ? process.env.SITE_URL : 'http://localhost:8888';

const config = {
  code: '',
  clientId: process.env.REACT_APP_TWITTER_CLIENT_ID,
  redirectURI: `${sourceURL}/.netlify/functions/twitterauthcallback`,
  grantType: 'authorization_code',
  codeVerifier: 'challenge',
};

const authTokens = { accessToken: '', refreshToken: '' };

module.exports = { sourceURL, config, authTokens };
