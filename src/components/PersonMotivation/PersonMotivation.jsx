import style from './PersonMotivation.module.css'
import {useTranslation} from "react-i18next";

export function PersonMotivation({person}) {
    const { t } = useTranslation("ns1");

    return (
        <section className={style.motivation_section}>
            <div className='container'>
                <div className={style.motivation_container}>
                    <div className={style.textblock}>
                        <div className={style.motivation__title}>{t("motivation")}</div>
                        <div className={style.motivation__paragraph}>{person.motivation}</div>
                    </div>

                    <div className={style.video_container}>
                        <iframe
                            className={style.video}
                            src={person.youtube_embed_url}
                            title={person.youtube_embed_url_title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}