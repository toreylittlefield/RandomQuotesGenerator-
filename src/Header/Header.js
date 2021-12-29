import { useContext, useState } from 'react';
import { UserContext } from '../Auth/TwitterAuth';
import { parseHash, removeHash } from '../Utils/auth';
import { useEffect } from 'react';

const Header = () => {
  const {
    user: { auth, token },
    login,
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
  const [state, setstate] = useState(null);

  useEffect(() => {
    if (!token && auth === false) return;
    (async () => {
      const res = await fetch('/.netlify/functions/getuserinfo', {
        method: 'POST',
        body: JSON.stringify(token),
      });
      const json = await res.json();
      console.log(json);
      setstate(json);
    })();
    // return () => {
    //   cleanup
    // }
  }, [token, auth]);

  useEffect(() => {
    if (response.token && auth === false) {
      const access_token = window.atob(response.token);
      const token_expiration = response.expires;
      login({ token: access_token, expires: token_expiration });
    }
  }, [response.token, login, response.expires, auth]);

  return (
    <nav>
      <div className="headerDiv">
        <h1>
          Macs <span style={{ color: 'grey', fontStyle: 'italic' }}>Quote</span> Generator
        </h1>
        {!auth && !token && <a href="/.netlify/functions/twitterauth">Sign Into Twitter</a>}
        {auth && token && <a href="/">Sign Out</a>}
        {state && (
          <div>
            {JSON.stringify(state, null, 2)}
            <img src={state.data.profile_image_url} alt={state.data.username} width={45} height={45} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
