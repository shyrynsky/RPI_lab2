import './PersonList.css';
import { Person } from "../Person/Person.jsx";
import { useTranslation } from "react-i18next";

export function PersonList() {
    const { t } = useTranslation();
    const persons = t("persons", { returnObjects: true });
    return (
        <div>
            <div className="container">
                {persons.map((data) => (
                    <Person
                        name={data.name}
                        surname={data.surname}
                        photo={data.photo}
                        description={data.description}
                        company={data.company}
                        compLogo={data.compLogo}
                    />
                ))}
            </div>
        </div>
    );
}