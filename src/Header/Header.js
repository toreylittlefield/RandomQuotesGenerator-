import { useContext, useState } from 'react';
import { UserContext } from '../Auth/TwitterAuth';
import { parseHash, removeHash } from '../Utils/auth';
import { useEffect } from 'react';

const Header = () => {
  const context = useContext(UserContext);
  console.log('window.location.hash', window.location.hash);
  const response = parseHash(window.location.hash);
  console.log(response);
  if (response.token) {
    console.log(window.atob(response.token));
    context.token = window.atob(response.token);
    context.expires = response.expires;
  }
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
    if (!context.token) return;
    console.log({ context });
    (async () => {
      const res = await fetch('/.netlify/functions/getuserinfo', {
        method: 'POST',
        body: JSON.stringify(context),
      });
      const json = await res.json();
      console.log(json);
      setstate(json);
    })();
    // return () => {
    //   cleanup
    // }
  }, [context.token, context]);

  return (
    <nav>
      <div className="headerDiv">
        <h1>
          Macs <span style={{ color: 'grey', fontStyle: 'italic' }}>Quote</span> Generator
        </h1>
        {!context.auth && !context.token && <a href="/.netlify/functions/twitterauth">Sign Into Twitter</a>}
        {context.auth && context.token && <a href="/">Sign Out</a>}
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
