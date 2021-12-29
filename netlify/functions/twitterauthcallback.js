import { config, sourceURL } from './utils/auth-config';
import { getAuthToken } from './utils/get-auth-token';

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

    // something went wrong
    if (!tokenRes.access_token) throw Error(tokenRes);
    console.table(tokenRes);
    // return token to client in url
    return {
      statusCode: 302,
      headers: {
        Location: `${sourceURL}/#expires_in=${tokenRes.expires_in}&token=${Buffer.from(
          tokenRes.access_token,
          'binary'
        ).toString('base64')}`,
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
