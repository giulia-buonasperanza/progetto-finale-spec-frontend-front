
import { Outlet } from "react-router-dom";
import Header from "../componenets/Header/Header.jsx";
import Footer from "../componenets/Footer/Footer.jsx";

function MainLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
