import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import HomePage from "./pages/HomePage";
import ELottoPage from "./pages/ELottoPage";
import TrendingPage from "./pages/TrendingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <CategoryTabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/e-lotto" element={<ELottoPage />} />
      </Routes>
    </div>
  );
}
