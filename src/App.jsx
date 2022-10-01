import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Event from "./pages/Event";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
