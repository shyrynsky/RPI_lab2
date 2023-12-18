import style from './PersonContent.module.css'
import leftArrow from '../../images/left_arrow_white.svg'
import rightArrow from '../../images/right_arrow_white.svg'
import {useState} from "react";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Wave from '../../images/wave.svg'

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

    return (
        <section className={style.content_section}>
            {/*<div className='container'>*/}
            <div className={style.content_container}>
                <img className={style.wave_container} src={Wave} alt=""/>

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
                                {index === currentIndex ? <CircleIcon/> : <CircleOutlinedIcon/>}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
            {/*</div>*/}
        </section>
    )
}