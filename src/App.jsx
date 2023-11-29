import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from "./pages/MainPage.jsx";
import { PersonsPage } from "./pages/PersonsPage.jsx";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/RPI_lab2/persons" element={<PersonsPage />} />
      </Routes>
    </BrowserRouter>
  );
}


