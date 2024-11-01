import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import StarterPage from './pages/StarterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="starter" element={<StarterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;