import { useTranslation } from "react-i18next";
import './MainContent.css';

export function MainContent() {
    const { t } = useTranslation("ns1");
    return (
        <section className="content_section">
            <div className="container">
                <div className="content_info">
                    <div className="content_circle"></div>
                    <div className="content_title">{t("content-title")}</div>
                    <p className="content_paragraph">{t("content-paragraph-1")}</p>
                    <p className="content_paragraph">{t("content-paragraph-2")}</p>
                    <button className="content_button">{t("content-button")}</button>
                </div>
            </div>
        </section>
    );
}