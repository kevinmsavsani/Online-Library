import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import BookDetail from "./components/bookDetail";
import Home from "./components/home";
import Sidebar from "./components/sideBar";
import ViewPage from './components/viewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className='content'>
        <Switch>
          <Route path="/search" exact component={ViewPage} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/" component={Home} />
        </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
