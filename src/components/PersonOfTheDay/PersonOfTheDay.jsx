import { useTranslation } from "react-i18next";
import './PersonOfTheDay.css';
import { Person } from "../Person/Person.jsx";

export function PersonOfTheDay() {
    const { t } = useTranslation("ns1");
    const persons = t("persons", { returnObjects: true });
    const currentDate = new Date();
    const data = persons[currentDate.getDate() % persons.length];
    return (
        <section className="person_of_the_day_section">
            <div className="container">
                <div className="person_of_the_day_info">
                    <div className="person_of_the_day_title">{t("person-of-the-day-title")}</div>
                    <p className="person_of_the_day_paragraph">{t("person-of-the-day-paragraph")}</p>
                </div>
                <Person
                    id={data.id}
                    name={data.name}
                    surname={data.surname}
                    photo={data.photo}
                    description={data.description}
                    company={data.company}
                    compLogo={data.compLogo}
                />
            </div>
        </section>
    );
}