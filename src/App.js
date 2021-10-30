import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>

      <Footer />

    </Router>
  );
}

export default App;
