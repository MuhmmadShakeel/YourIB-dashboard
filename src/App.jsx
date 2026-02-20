import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./component/common/SideBar";
import Home from "./homepage/Home";
import AnouncementPage from "./homepage/anouncement/AnouncementPage";
import FaqPage from "./homepage/faq/FaqPage";
import CommunityPage from "./homepage/CommunityPage";
import SignalPage from "./homepage/signalpage/SignalPage";
import SupportPage from "./homepage/supportpage/SupportPage";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#f9fafb]">

        <SideBar />

        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/announcement" element={<AnouncementPage />} />
            <Route path="/faq" element={<FaqPage/>} />
            <Route path="/community" element={<CommunityPage/>} />
            <Route path="/signals" element={<SignalPage/>} />
            <Route path="/support" element={<SupportPage/>} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
