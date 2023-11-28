import { useTranslation } from "react-i18next";
import './PersonOfTheDay.css';

export function PersonOfTheDay() {
    const { t } = useTranslation("ns1");
    return (
        <section className="person_of_the_day_section">
            <div className="container">
                <div className="person_of_the_day_info">
                    <div className="person_of_the_day_title">{t("person-of-the-day-title")}</div>
                    <p className="person_of_the_day_paragraph">{t("person-of-the-day-paragraph")}</p>
                </div>
                {/* <Person/> */}
            </div>
        </section>
    );
}