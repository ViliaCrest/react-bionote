import { useState } from "react";
import Car from "./Car";
import Bionote from "./Bionote";
import BionotePair from "./BionotePair";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleLogin = () => setLoggedIn(true);

  const handleBack = () => setSelectedPage(null);

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {!loggedIn ? (
          <Car onLogin={handleLogin} />
        ) : !selectedPage ? (
          <div className="page-select-wrapper">
            <h2 className="page-select-title">Choose Profile</h2>

            <div className="page-select-buttons">
              <button
                className="profile-btn profile-btn-blue"
                onClick={() => setSelectedPage("vilia")}
              >
                Vilia Crestene Bionote
              </button>

              <button
                className="profile-btn profile-btn-green"
                onClick={() => setSelectedPage("carla")}
              >
                Carla Primitiva Bionote
              </button>
            </div>
          </div>
        ) : selectedPage === "vilia" ? (
          <Bionote onBack={handleBack} />
        ) : (
          <BionotePair onBack={handleBack} />
        )}
      </main>
      <Footer />
    </div>
  );
}