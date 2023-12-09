import style from './PersonContent.module.css'
import leftArrow from '../../images/left_arrow_white.svg'
import rightArrow from '../../images/right_arrow_white.svg'
import {useState} from "react";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

export function PersonContent({person}) {
    const sliderImages = person.slider_images
    const [currentIndex, setCurrentIndex] = useState(0)

    function toggleLeft() {
        setCurrentIndex(index => {
            if (index === 0) return sliderImages.length - 1
            return index - 1
        })
    }

    const toggleRight = () => {
        setCurrentIndex(index => {
            if (index === sliderImages.length - 1) return 0
            return index + 1
        })
    }

    console.log(sliderImages)

    return (
        <section className={style.content_section}>
            <div className='container'>
                <div className={style.content_container}>
                    <div className={style.splay_container}>
                        <svg width="1440" height="429" viewBox="0 0 1440 429" fill="none"
                        >
                            <path
                                d="M0 34.5892C0 34.5892 141 -59.5 349.5 66C558 191.5 865.5 -26 1087.5 91C1309.5 208 1439 34.5892 1439 34.5892V402C1439 402 1298.5 481.84 1087.5 365.84C876.5 249.84 577 437 349.5 330C207.117 263.033 79.2928 336.378 36.5 365.84C10.9185 383.453 0 402 0 402V34.5892Z"
                                fill="#68637D"/>
                        </svg>
                    </div>

                    <div className={style.slider}>
                        <img className={style.arrow_button} alt="LeftArrow" src={leftArrow}
                             onClick={toggleLeft}></img>
                        <div className={style.slider_image_container}>
                            <div style={{display: "flex", overflow: "hidden"}}>
                                {
                                    sliderImages.map(image => (
                                        <img key={image}
                                             src={process.env.PUBLIC_URL + image}
                                             className={style.slider_image}
                                             alt=""
                                             style={{translate: `${-100 * currentIndex}%`}}/>
                                    ))
                                }
                            </div>
                        </div>
                        <img className={style.arrow_button} alt="RightArrow" src={rightArrow}
                             onClick={toggleRight}></img>

                        <div className={style.slider_dot_button_container}>
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={style.slider_dot_button}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {index === currentIndex ? <CircleIcon /> : <CircleOutlinedIcon />}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}