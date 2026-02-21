import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./component/common/SideBar";
import AnouncementPage from "./pages/anouncement/AnouncementPage";
import FaqPage from "./pages/faq/FaqPage";
import CommunityPage from "./pages/communitypage/CommunityPage";
import SignalPage from "./pages/signalpage/SignalPage";
import SupportPage from "./pages/supportpage/SupportPage";
import CoursePage from "./pages/coursepage/CoursePage";
import LotCalculaterPage from "./pages/lotcalculater/LotCalculaterPage";
import BrokerPage from "./pages/brokerpage/BrokerPage";
import WhiteLabelPage from "./pages/whitelabelpage/WhiteLabelPage";
import DashboardPage from "./pages/dashboardpage/DashboardPage";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#f9fafb]">

        <SideBar />

        <main className="flex-1 overflow-x-hidden pt-16 md:pt-0 bg-gray-100">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={< DashboardPage/>} />
            <Route path="/announcement" element={<AnouncementPage />} />
            <Route path="/faq" element={<FaqPage/>} />
            <Route path="/community" element={<CommunityPage/>} />
            <Route path="/signals" element={<SignalPage/>} />
            <Route path="/support" element={<SupportPage/>} />
            <Route path="/Courses" element={<CoursePage/>} />
            <Route path="/calculator" element={<LotCalculaterPage/>} />
            <Route path="/brokers" element={<BrokerPage/>} />
            <Route path="/white-label" element={<WhiteLabelPage/>} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
