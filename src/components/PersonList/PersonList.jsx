import './PersonList.css';
import { Person } from "../Person/Person.jsx";
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import SearchImage from '../../images/search_icon.svg';

function TopSearch({ filterText, onFilterTextChange }) {
    const { t } = useTranslation();
    return (
        <div className="search_elem">
            <p className='search__title'>{t("search-title")}</p>
            <p className='search_paragraph'>{t("search-paragraph")}</p>
            <div className='search_bar'>
                <input
                    className='search_input'
                    type="text"
                    value={filterText} placeholder={t("search-placeholder")}
                    onChange={(e) => onFilterTextChange(e.target.value)} />
                <img src={SearchImage} alt="." className='search_image' />
            </div>
        </div>
    );
}

export function PersonList() {
    const [filterText, setFilterText] = useState('');
    const { t } = useTranslation();
    const persons = t("persons", { returnObjects: true });

    const rows = [];
    persons.forEach((data) => {
        if (
            (data.name + ' ' + data.surname).toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        rows.push(
            <Person
                key={data.id}
                name={data.name}
                surname={data.surname}
                photo={data.photo}
                description={data.description}
                company={data.company}
                compLogo={data.compLogo}
            />
        );

    });

    return (
        <section className='persons_section'>
            <div className="container">
                <TopSearch
                    filterText={filterText}
                    onFilterTextChange={setFilterText}
                />
                {rows}
            </div>
        </section>
    );
}