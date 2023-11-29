import { MainContent } from "../components/MainContent/MainContent.jsx";
import { PersonOfTheDay } from "../components/PersonOfTheDay/PersonOfTheDay.jsx";
import { MainTop } from "../components/MainTop/MainTop.jsx";

export function MainPage() {
    return (
        <>
            <MainTop />
            <MainContent />
            <PersonOfTheDay />
        </>
    );
}