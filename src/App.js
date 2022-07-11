import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productid" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
