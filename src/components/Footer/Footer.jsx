import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Footer.css';
import LogoImage from '../../images/Logo.svg';
import InstaLogo from '../../images/Instagram_Icon_w.svg';
import TelegLogo from '../../images/Telegram_Icon_w.svg';

export function Footer() {
    const { t } = useTranslation("ns1");
    const navigate = useNavigate();
    return (
        <header className="footer">
            <div className="container">
                <nav className="footer_content">

                    <img src={LogoImage} alt="logo" className="footer_logo"
                        onClick={() => {
                            navigate("/RPI_lab2");
                            window.scrollTo(0, 0);
                        }}
                    />
                    <div className="foot_links_elem">
                        <p className="footer__title">{t("footer-quick-links")}</p>
                        <Link to={"/RPI_lab2"} className="footer_link"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            {t("header-link-main")}
                        </Link>
                        <Link to={"/RPI_lab2/persons"} className="footer_link"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            {t("header-link-persons")}
                        </Link>
                    </div>
                    <div className="footer_contacts">
                        <p className="footer__title">{t("footer-contacts")}</p>
                        <p className="footer__paragraph">{t("footer-paragraph")}</p>
                        <div className="foot_socials_elem">
                            <a href="https://www.instagram.com/">
                                <img src={InstaLogo} alt="instagram" />
                            </a>
                            <a href="https://web.telegram.org/">
                                <img src={TelegLogo} alt="telegram" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}