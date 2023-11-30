import { MainContent } from "../components/MainContent/MainContent.jsx";
import { PersonOfTheDay } from "../components/PersonOfTheDay/PersonOfTheDay.jsx";
import { MainTop } from "../components/MainTop/MainTop.jsx";
import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Developers } from "../components/Developers/Developers.jsx";

export function MainPage({ isRuLang, setRuLang }) {

    return (
        <>
            <Header isRuLang={isRuLang} setRuLang={setRuLang} />
            <MainTop />
            <MainContent />
            <PersonOfTheDay />
            <Developers />
            <Footer />
        </>
    );
}