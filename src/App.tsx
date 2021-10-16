import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import LayoutBody from "./pages/layout/LayoutBody";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Router>
        <LayoutBody />
      </Router>
    </div>
  );
}

export default App;
