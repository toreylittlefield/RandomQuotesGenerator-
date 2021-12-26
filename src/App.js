import Header from "./Header/Header";
import QuotesMain from "./QuoteDivBlock/QuotesMain";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";




function App() {


  return (

    <Router>
      <Header />
      <ul className="headerNav">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Search'>Search Quotes</NavLink></li>
      </ul>

      <Switch>
        <Route path='/Search'>
          <SearchPage />
        </Route>
        <Route path='/'>
          <QuotesMain />

        </Route>


      </Switch>



    </Router>



  );
}

export default App;
