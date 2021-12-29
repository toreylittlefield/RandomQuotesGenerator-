import fetch from 'node-fetch';

exports.handler = async (event, context) => {
  try {
    const access_token = JSON.parse(event.body).token;
    const userFields = `user.fields=profile_image_url`;
    const url = `https://api.twitter.com/2/users/me?${userFields}`;
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
