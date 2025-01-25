
  import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
  import Login from "./components/Login";
  import Register from "./components/Register";
  import Home from "./components/Home";
  import "./App.css"

  function App(){

    return (
      <Router>
        <div classname ="App">
          <Routes>
            <Route path = "/register" element = {<Register />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/home" element = {<Home />} />
          </Routes>
        </div>
      </Router>
    )
  }

  export default App;

