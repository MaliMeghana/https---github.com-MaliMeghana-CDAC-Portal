import "./App.css";
import Header from "./components/Header";
import AdminField from "./components/AdminField";
import Admin from "./components/Admin";
import SupAdminField from "./components/SupAdminField";
import { Route, BrowserRouter as Router,Switch ,withRouter} from "react-router-dom";
import {createBrowserHistory} from "history";
import UpdateStudent from "./components/UpdateStudent";
import Student from "./components/Student";
import Login from "./components/Login";
import Feedback from "./components/Feedback";
import Notice from "./components/Notice";

function App() {
  const history=createBrowserHistory();
  return (
    <div className="main-container">
      <Router history={history}>
        <Header />
        <div className="main">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminField />
          </Route>
          <Route path="/adminnext">
            <Admin />
          </Route>
          <Route path="/supadmin">
            <SupAdminField />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/updateStudent">
            <UpdateStudent />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/notice">
            <Notice />
          </Route>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
