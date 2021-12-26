import { useContext } from 'react';
import { UserContext } from '../Auth/TwitterAuth';

const Header = () => {
  const context = useContext(UserContext);
  //Add SVG into the searchbar
  // const returnSVG = () => {
  //     return (
  //         <img src="https://img.icons8.com/office/16/000000/search--v2.png" />
  //     )
  // }

  return (
    <nav>
      <div className="headerDiv">
        <h1>
          Macs <span style={{ color: 'grey', fontStyle: 'italic' }}>Quote</span> Generator
        </h1>
        {!context.auth && !context.token && <a href="/.netlify/functions/twitterauth">Sign Into Twitter</a>}
        {context.auth && context.token && <a href="/">Sign Out</a>}
      </div>
    </nav>
  );
};

export default Header;
