import * as React from "react";
import "@styles/app.scss";
import AnimatePage from "./AnimatePage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <AnimatePage />
      </BrowserRouter>
    </div>
  );
};

export default App;
