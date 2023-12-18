import {useTranslation} from "react-i18next";
import style from './PersonGreeting.module.css'
import ArrowLeft from '../../images/left_arrow_black.svg'
import {useNavigate} from "react-router-dom";

export function PersonGreeting({person}) {
    const { t } = useTranslation("ns1");
    const navigate = useNavigate()

    return (
        <section className="top_section">
            <div className="container">
                <div className={style.back_button} onClick={() => navigate("/RPI_lab2/persons")}>
                    <img src={ArrowLeft} alt="Arrow"/>
                    <div className={style.back_button_text}>{t("content-button")}</div>
                </div>

                <div className={style.top_inner}>
                    <div className={style.top_info}>
                        <p className={style.top_paragraph_1}>Person.by</p>
                        <h1 className={style.top__title}>{person.name} {person.surname}</h1>
                        <h2 className={style.top_paragraph_2}>{person.birthdate} {person.birthplace}</h2>
                    </div>
                    <div className={style.top_visual}>
                        <div className={style.top_y_circle}></div>
                        <div className={style.top_w_circle}></div>
                        <div className={style.top_button_circle}>
                            <img src={process.env.PUBLIC_URL + person.compLogo} alt="arrow"/>
                        </div>
                        <img src={process.env.PUBLIC_URL + person.photo_alt} alt="top_image" className={style.top_image}/>
                    </div>
                </div>
            </div>
        </section>
    );
}