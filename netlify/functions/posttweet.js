//

import fetch from 'node-fetch';

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const access_token = body.token;
    const tweetMsg = body.tweetMsg;
    const url = `https://api.twitter.com/2/tweets`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ text: tweetMsg }),
    });
    const json = await res.json();
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
