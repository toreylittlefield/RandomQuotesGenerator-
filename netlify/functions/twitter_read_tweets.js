import fetch from 'node-fetch';

exports.handler = async (event, context) => {
  try {
    const access_token = JSON.parse(event.body)['access_token'];
    console.log({ access_token, body: event.body });
    // const url = `https://api.twitter.com/2/tweets?ids=1261326399320715264`;
    const url = `https://api.twitter.com/2/users/by/username/toreylittlefiel`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const json = await res.json();
    console.log('read user data', { json });
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message || error }),
    };
  }
};
