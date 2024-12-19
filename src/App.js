import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/welcomepage/AuthPage.jsx";
import SummaryPage from "./pages/homepage/SummaryPage.jsx";
import { useState, useEffect } from "react";
import { supabase } from "./client.js";
import RealEstatePage from "./pages/realEstate/realEstatePage.jsx";
import PortfolioPage from "./pages/portolio/portfolioPage.jsx";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get the current session once on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Subscribe to authentication changes (login, logout, etc.)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup the subscription when the component unmounts
    return () => {
      if (authListener) authListener.subscription?.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={session ? <SummaryPage /> : <AuthPage />} />
        <Route path="/SummaryPage" element={<SummaryPage />} />
        <Route path="/realEstatePage" element={<RealEstatePage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
