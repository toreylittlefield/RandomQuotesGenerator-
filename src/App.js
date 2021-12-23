import Header from "./Header/Header";
import QuotesMain from "./QuoteDivBlock/QuotesMain";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {


  return (

    <Router>
      <Header />

      <QuotesMain />


    </Router>



  );
}

export default App;
