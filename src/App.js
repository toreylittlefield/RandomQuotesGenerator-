import Header from './Header/Header';
import QuotesMain from './QuoteDivBlock/QuotesMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TwitterAuthProvider from './Auth/TwitterAuth';

function App() {
  return (
    <TwitterAuthProvider>
      <Router>
        <Header />

        <QuotesMain />
      </Router>
    </TwitterAuthProvider>
  );
}

export default App;
