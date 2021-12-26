
import Header from './Header/Header';
import QuotesMain from './QuoteDivBlock/QuotesMain';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
import SearchPage from './SearchPage/SearchPage';
import TwitterAuthProvider from './Auth/TwitterAuth';

function App() {
  return (
<TwitterAuthProvider>
    <Router>
      <Header />
      <ul className="headerNav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Search">Search Quotes</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/Search">
          <SearchPage />
        </Route>
        <Route path="/">
          <QuotesMain />
        </Route>
      </Switch>
    </Router>
</TwitterAuthProvider>
  );
}

export default App;
