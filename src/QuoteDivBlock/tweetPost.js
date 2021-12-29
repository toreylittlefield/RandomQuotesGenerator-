import { useContext, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { UserContext } from '../Auth/TwitterAuth';

const TrialButton = ({ currentQuote = { content: '', author: '' } }) => {
  const { content, author } = currentQuote;

  const {
    user: { token, username },
  } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ error: false, message: '' });
  const [postId, setPostId] = useState('');
  const [linkToPost, setLinkToPost] = useState(`https://twitter.com/${username}/status/${postId}`);

  async function tweetPost() {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        const response = await fetch('/.netlify/functions/posttweet', {
          method: 'POST',
          body: JSON.stringify({ token, tweetMsg: `${content} -- ${author} ` }),
        });
        if (response.ok) {
          const json = await response.json();
          if (json.data) {
            const { id } = json.data;
            setPostId(id);
            setIsError({ error: false, message: '' });
            setLinkToPost(`https://twitter.com/${username}/status/${id}`);
            setIsLoading(false);
          }
        } else {
          throw new Error('Hi This is an Error');
        }
      }, 500);
    } catch (e) {
      setIsError({ error: true, message: e.message });
      console.log(e);
    }
  }
  return (
    <Fragment>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(5,5,3, 0.7',
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <progress max="100"></progress>
          <h2 style={{ color: 'whitesmoke' }}>Loading</h2>
        </div>
      )}
      {isError.error && <div>{JSON.stringify(isError.message, null, 2)}</div>}
      <button disabled={!token} onClick={tweetPost}>
        Post To Twitter
      </button>
      {postId && (
        <a href={linkToPost} rel="noreferrer" target="_blank">
          View Post On Twitter
        </a>
      )}
    </Fragment>
  );
};

export default TrialButton;
// export default tweetPost;
