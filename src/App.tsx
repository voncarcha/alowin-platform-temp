import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import HomePage from "./pages/HomePage";
import ELottoPage from "./pages/ELottoPage";
import ESabongPage from "./pages/ESabongPage";
import SportsbookPage from "./pages/SportsbookPage";
import TrendingPage from "./pages/TrendingPage";
import PlaceholderTabPage from "./pages/PlaceholderTabPage";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <CategoryTabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/e-lotto" element={<ELottoPage />} />
        <Route path="/e-sabong" element={<ESabongPage />} />
        <Route path="/arena-console" element={<Navigate to="/e-sabong" replace />} />
        <Route path="/sportsbook" element={<SportsbookPage />} />
        <Route path="/casino" element={<PlaceholderTabPage title="Casino" />} />
        <Route path="/live-casino" element={<PlaceholderTabPage title="Live Casino" />} />
      </Routes>
    </div>
  );
}
