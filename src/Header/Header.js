import { useContext } from 'react';
import { UserContext } from '../Auth/TwitterAuth';
import { parseHash, removeHash } from '../Utils/auth';
import { useEffect } from 'react';

const Header = () => {
  const {
    user: { auth, token, id, name, profile_image_url, username, expires },
    login,
    logout,
  } = useContext(UserContext);
  const response = parseHash(window.location.hash);

  /* Clear hash */
  removeHash();

  //Add SVG into the searchbar
  // const returnSVG = () => {
  //     return (
  //         <img src="https://img.icons8.com/office/16/000000/search--v2.png" />
  //     )
  // }

  // get twitter user data once we have a token from the twitterauthcallback
  useEffect(() => {
    if (auth === true || !response.token) return;
    (async () => {
      const token = window.atob(response.token);
      const expires = response.expires_in;
      try {
        const res = await fetch('/.netlify/functions/getuserinfo', {
          method: 'POST',
          body: JSON.stringify({ token }),
        });
        const json = await res.json();
        const { username, profile_image_url, id, name } = json.data;
        login({ token, expires, username, profile_image_url, id, name });
      } catch (error) {
        console.error(error);
        login({ token, expires });
      }
    })();
  }, [response, login, auth]);

  const handleSignOut = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav>
      <div className="headerDiv">
        <h1>
          Macs <span style={{ color: 'grey', fontStyle: 'italic' }}>Quote</span> Generator
        </h1>
        {!auth && !token && (
          <a href="/.netlify/functions/twitterauth">
            <button type="button">Sign Into Twitter</button>
          </a>
        )}
        {auth && token && <button onClick={handleSignOut}>Sign Out</button>}
        {profile_image_url && (
          <div>
            {JSON.stringify({ auth, token, id, name, profile_image_url, username, expires }, null, 2)}
            <img src={profile_image_url} alt={username} width={45} height={45} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
