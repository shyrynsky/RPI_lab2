import {useTranslation} from "react-i18next";
import style from './PersonGreeting.module.css'
import ArrowLeft from '../../images/left_arrow_black.svg'
import {useNavigate} from "react-router-dom";

export function PersonGreeting({person}) {
    const {t} = useTranslation("ns1");
    const navigate = useNavigate()

    return (
        <section className={style.greeting_section}>
            <div className='container'>
                <div className={style.back_button}>
                    <img src={ArrowLeft} alt="Arrow" onClick={() => navigate("/RPI_lab2/persons")}/>
                    <div className={style.back_button_text}>{t["content-button"]}</div>
                </div>

                <div className={style.greeting_container}>
                    <div className={style.greeting_background}>
                        <div className={style.back_circle}>
                            <div className={style.outer_circle}></div>
                            <div className={style.inner_circle}></div>
                        </div>
                        <img className={style.person_photo} alt='person'
                             src={process.env.PUBLIC_URL + person.photo_alt}></img>
                        <div className={style.front_circle}>
                            <img className={style.company_logo} alt='Logo'
                                 src={process.env.PUBLIC_URL + person.compLogo}></img>
                        </div>
                    </div>

                    <div className={style.text_container}>
                        <p className={style.person_by_text}>Person.by</p>
                        <p className={style.person_name_text}>{person.name} {person.surname}</p>
                        <p className={style.person_birthdate_text}>{person.birthdate}</p>
                        <p className={style.person_birthplace_text}>{person.birthplace}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}