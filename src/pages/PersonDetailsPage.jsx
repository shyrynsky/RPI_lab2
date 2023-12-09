import { useParams} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {PersonGreeting} from "../components/PersonGreeting/PersonGreeting";
import {useTranslation} from "react-i18next";
import {PersonContent} from "../components/PersonContent/PersonContent";
import {PersonMotivation} from "../components/PersonMotivation/PersonMotivation";
import {PersonMap} from "../components/PersonMap/PersonMap";
import {Footer} from "../components/Footer/Footer";

export function PersonDetailsPage({ isRuLang, setRuLang }) {
    const {t} = useTranslation("ns1");
    const params = useParams()

    const personId = params.personId
    const persons = t("persons", { returnObjects: true });
    const person = persons.find(item => item.id == personId)

    if (person == null)
        return (
            <>
                <div>
                    No such user
                </div>
            </>
        )

    return (
        <>
            <Header isRuLang={isRuLang} setRuLang={setRuLang} />
            <PersonGreeting person={person} />
            <PersonContent person={person} />
            <PersonMotivation person={person} />
            <PersonMap person={person} />
            <Footer />
        </>
    )
}