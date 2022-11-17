import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Header from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <HashRouter>
    <Header />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
