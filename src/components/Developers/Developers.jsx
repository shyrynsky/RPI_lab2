import { useTranslation } from "react-i18next";
import './Developers.css';

export function Developers() {
    const { t } = useTranslation("ns1");
    return (
        <section className="developers_section">
            <div className="container">
                <div className="developers_info">
                    <div className="developers_title">{t("developers-title")}</div>
                    <p className="developers_paragraph">{t("developers-paragraph")}</p>
                </div>
            </div>
        </section>
    );
}