import { useTranslation } from "react-i18next";
import { Link as Anchor } from "react-scroll";
import './MainTop.css';
import TopImage from '../../images/Man.png';
import ArrowImage from '../../images/Arrow.svg';

export function MainTop() {
    const { t } = useTranslation("ns1");
    return (
        <section className="top_section">
            <div className="container">
                <div className="top_inner">
                    <div className="top_info">
                        <p className="top_paragraph_1">Person.by</p>
                        <h1 className="top__title">{t("top-title")}</h1>
                        <h2 className="top_paragraph_2">{t("top-paragraph")}</h2>
                    </div>
                    <div className="top_visual">
                        <div className="top_y_circle"></div>
                        <div className="top_w_circle"></div>
                        <Anchor
                            to="footer"
                            duration={500}
                            smooth={true}
                            className="top_scroll_Anchor"
                            onClick={() => { }}
                        >
                            <div className="top_button_circle">
                                <p className="top_button_text">{t("top-button")}</p>
                                <img src={ArrowImage} alt="arrow" />
                            </div>
                        </Anchor>
                        <img src={TopImage} alt="top_image" className="top_image" />
                    </div>
                </div>
            </div>
        </section>
    );
}