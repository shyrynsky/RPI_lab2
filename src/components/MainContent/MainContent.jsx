import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './MainContent.css';

export function MainContent() {
    const { t } = useTranslation("ns1");
    const navigate = useNavigate();
    return (
        <section className="content_section">
            <div className="container">
                <div className="content_info">
                    <div className="content_circle"></div>
                    <div className="content_title">{t("content-title")}</div>
                    <p className="content_paragraph">{t("content-paragraph-1")}</p>
                    <p className="content_paragraph">{t("content-paragraph-2")}</p>
                    <button
                        className="content_button"
                        onClick={() => {
                            navigate("persons");
                            window.scrollTo(0, 0);
                        }}
                    >
                        {t("content-button")}
                    </button>
                </div>
            </div>
        </section>
    );
}