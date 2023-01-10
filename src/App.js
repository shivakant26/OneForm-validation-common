import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Component/Details/Details";
import Header from "./Common/header";
import About from "./Pages/About/About";
import Login from "./Component/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
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
