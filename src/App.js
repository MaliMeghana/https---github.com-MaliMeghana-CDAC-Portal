import "./App.css";
import Header from "./components/Header";
import AdminField from "./components/AdminField";
import Admin from "./components/Admin";
import SupAdminField from "./components/SupAdminField";
import { Route, BrowserRouter as Router } from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";
import Student from "./components/Student";
import Login from "./components/Login";
import Feedback from "./components/Feedback";
import Notice from "./components/Notice";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <div className="main">
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
        </div>
      </Router>
    </div>
  );
}

export default App;
