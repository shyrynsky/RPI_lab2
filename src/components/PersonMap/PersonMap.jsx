import style from './PersonMap.module.css'

export function PersonMap({person}) {
    return (
        <section className={style.map_section}>
            <div className='container'>
                <div className={style.map_container}>
                    <div className={style.textblock}>
                        <div className={style.textblock__title}>{person.office_name}</div>
                        <div className={style.textblock__paragraph}>{person.office_location}</div>
                    </div>

                    <div className={style.office_map_container}>
                        <iframe
                            className={style.office_map}
                            src={person.office_map_url}
                            allowFullScreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}