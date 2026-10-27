
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import GameDetailPage from "./pages/GameDetailPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <FavoritesProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<GamesPage />} />
          <Route path="/games/:id" element={<GameDetailPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
