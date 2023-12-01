import { useTranslation } from "react-i18next";
import './Developers.css';
import Card from 'react-bootstrap/Card';



export function Developers() {
    const { t } = useTranslation("ns1");
    const developers = t("developers", { returnObjects: true });
    const developers_list = developers.map((data) => (
        <DevCard
            key={data.id}
            name={data.name}
            surname={data.surname}
            photo={data.photo}
            github={data.github}
        />
    ));
    return (
        <section className="developers_section">
            <div className="container">
                <div className="developers_info">
                    <div className="developers_title">{t("developers-title")}</div>
                    <p className="developers_paragraph">{t("developers-paragraph")}</p>
                </div>
                <div className="developers_cards">
                    {developers_list}
                </div>
            </div>
        </section>
    );
}



function DevCard({ name, surname, photo, github }) {
    return (
        <Card className="text-white card_bg">
            <Card.Img src={process.env.PUBLIC_URL + photo} alt="Card image" />
            <Card.ImgOverlay
                className="card_overlay">
                <Card.Img
                    src={process.env.PUBLIC_URL + "/img/Card_rectangle.svg"}
                    alt="Card image" />
                <Card.ImgOverlay >
                    <Card.Title className="card__title">
                        {surname}<br />{name}
                    </Card.Title>
                    <Card.Text className="card_paragraph">
                        GitHub:
                    </Card.Text>
                    <Card.Link
                        href={"https://github.com/" + github}
                        className="card_link">
                        {github}</Card.Link>
                </Card.ImgOverlay>
            </Card.ImgOverlay>
        </Card>
    );
}