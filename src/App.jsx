import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./component/common/SideBar";
import Home from "./homepage/Home";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#f9fafb]">

        <SideBar />

        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
