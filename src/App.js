import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./component/Details";
import Header from "./common/header";
import About from "./Pages/About";
import Login from "./component/Login";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const authToken = localStorage.getItem("token");
  return (
    <div className="App">
      <Router>
        {authToken ? (
          <>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<p>Page Not found</p>} />
            </Routes>
          </>
        )}
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
