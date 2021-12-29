const sourceURL = process.env.NODE_ENV === 'production' ? process.env.SITE_URL : 'http://localhost:8888';

const availableScopes = {
  tweetRead: 'tweet.read',
  tweetWrite: 'tweet.write',
  tweetModerateWrite: 'tweet.moderate.write',
  usersRead: 'users.read',
  likeRead: 'like.read',
  likeWrite: 'like.write',
  followsRead: 'follows.read',
  followsWrite: 'follows.write',
  blockRead: 'block.read',
  blockWrite: 'block.write',
  muteRead: 'mute.read',
  muteWrite: 'mute.write',
  spaceRead: 'space.read',
  listRead: 'list.read',
  listWrite: 'list.write',
};

const config = {
  code: '',
  clientId: process.env.REACT_APP_TWITTER_CLIENT_ID,
  redirectURI: `${sourceURL}/.netlify/functions/twitterauthcallback`,
  grantType: 'authorization_code',
  codeVerifier: 'challenge',
};

module.exports = { sourceURL, config, availableScopes };
