import { Header } from "../components/Header/Header.jsx";
import { PersonList } from "../components/PersonList/PersonList.jsx";

export function PersonsPage({ isRuLang, setRuLang }) {
    return (
        <>
            <Header isRuLang={isRuLang} setRuLang={setRuLang} />
            <PersonList />
        </>
    );
}