import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from "./pages/MainPage.jsx";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}


