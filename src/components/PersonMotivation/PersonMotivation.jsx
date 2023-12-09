import style from './PersonMotivation.module.css'

export function PersonMotivation({person}) {
    return (
        <section className={style.motivation_section}>
            <div className='container'>
                <div className={style.motivation_container}>
                    <div className={style.textblock}>
                        <div className={style.motivation__title}>мотивация</div>
                        <div className={style.motivation__paragraph}>{person.motivation}</div>
                    </div>

                    <iframe
                        className={style.video}
                        src={person.youtube_embed_url}
                        title={person.youtube_embed_url_title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </section>
    )
}