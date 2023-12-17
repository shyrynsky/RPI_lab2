import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage.jsx";
import {PersonsPage} from "./pages/PersonsPage.jsx";
import './App.css';
import {useState} from 'react';
import {PersonDetailsPage} from "./pages/PersonDetailsPage";
import {NotFoundPage} from "./pages/NotFoundPage";

export default function App() {
    const [isRuLang, setRuLang] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/RPI_lab2" element={<MainPage
                    isRuLang={isRuLang} setRuLang={setRuLang}/>}/>
                <Route
                    path="/RPI_lab2/persons" element={<PersonsPage
                    isRuLang={isRuLang} setRuLang={setRuLang}/>}/>
                <Route
                    path="/RPI_lab2/persons/:personId"
                    element={<PersonDetailsPage isRuLang={isRuLang} setRuLang={setRuLang}/>}
                />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}