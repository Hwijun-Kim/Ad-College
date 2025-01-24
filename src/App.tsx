import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import FirstTeamPage from "./pages/FirstTeamPage.tsx";
import SecondTeamPage from "./pages/SecondTeamPage.tsx";
import ThirdTeamPage from "./pages/ThirdTeamPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/firstteam" element={<FirstTeamPage />} />
          <Route path="/secondteam" element={<SecondTeamPage />} />
          <Route path="/thirdteam" element={<ThirdTeamPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
