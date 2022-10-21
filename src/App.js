import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import PortfolioDetail from "./page/PortfolioDetail";

function App() {
  return (
    <section className="scroll-smooth">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-detail" element={<PortfolioDetail/>} />
      </Routes>
    </section>
  );
}

export default App;
