import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import i18next from "i18next";
import './Header.css';
import LogoImage from '../../images/Logo.svg';
import InstaLogo from '../../images/Instagram_Icon.svg';
import TelegLogo from '../../images/Telegram_Icon.svg';

export function Header({ isRuLang, setRuLang }) {
    const { t } = useTranslation("ns1");
    const navigate = useNavigate();
    const ruButtonStyle = {
        backgroundColor: !isRuLang ? "white" : "black",
        color: !isRuLang ? "black" : "white"
    }
    const enButtonStyle = {
        backgroundColor: isRuLang ? "white" : "black",
        color: isRuLang ? "black" : "white"
    }
    return (
        <header className="header">
            <div className="container">
                <nav className="header_content">

                    <img src={LogoImage} alt="logo" className="header_logo"
                        onClick={() => {
                            navigate("/RPI_lab2");
                            window.scrollTo(0, 0);
                        }}
                    />
                    <div className="links_elem">
                        <Link to={"/RPI_lab2"} className="header_link"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            {t("header-link-main")}
                        </Link>
                        <Link to={"/RPI_lab2/persons"} className="header_link"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            {t("header-link-persons")}
                        </Link>
                    </div>
                    <div className="socials_elem">
                        <a href="https://www.instagram.com/">
                            <img src={InstaLogo} alt="instagram" />
                        </a>
                        <a href="https://web.telegram.org/">
                            <img src={TelegLogo} alt="telegram" />
                        </a>
                    </div>
                    <div className="lang_elem">
                        <button
                            className="lang_button"
                            style={ruButtonStyle}
                            onClick={() => {
                                setRuLang(true);
                                i18next.changeLanguage("ru");
                            }}
                        >
                            RU
                        </button>
                        <button
                            className="lang_button"
                            style={enButtonStyle}
                            onClick={() => {
                                setRuLang(false);
                                i18next.changeLanguage("en");
                            }}
                        >
                            EN
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}