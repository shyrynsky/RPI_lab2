import {useTranslation} from "react-i18next";
import './Person.css';
import {useNavigate} from "react-router-dom";

export function Person({id, name, surname, photo, description, company, compLogo}) {
    const {t} = useTranslation("ns1");
    const navigate = useNavigate();

    const onPersonDetailsButtonClick = () => {
        navigate(`/RPI_lab2/persons/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className="person_elem">
            <div className="person_inner">
                <div className="person_visual">
                    <img src={process.env.PUBLIC_URL + photo} alt="person" className="person_photo"/>
                    <div className="person_y_circle"></div>
                    <div className="person_w_circle">
                        <img src={process.env.PUBLIC_URL + compLogo} alt="company logo" className="person_logo"/>
                    </div>
                </div>
                <div className="person_info">
                    <div className="person_text_info">
                        <div className="person_line"></div>
                        <p className="person__title">{name}</p>
                        <p className="person__title">{surname}</p>
                        <p className="person_paragraph">{description} <span className="person_company">{company}</span>
                        </p>
                    </div>
                    <button className="person_button" onClick={onPersonDetailsButtonClick}>
                        {t("person-button")}
                    </button>
                </div>
            </div>
        </div>
    );
}