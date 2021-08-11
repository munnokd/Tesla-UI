import React from 'react'
import './Part.css'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Fade from 'react-reveal/Fade';

const Part = ({ ani, title, desc, descun, bgimg, button1, button2 }) => {
    return (
        <div className="part" style={{ backgroundImage: `url(${bgimg})`,
        height: `window.innerHeight+"px"`, }}>

            <div className="part__title">
                <Fade bottom>
                    <h1>{title}</h1>
                    <div className="part__info">
                        {desc ? <p>{desc}&nbsp;</p> : null}
                        {descun ? <p className="part__p">{descun}</p> : null}
                    </div>
                </Fade>
            </div>
            <div className="part__bot">
                <div className="part__button">
                    <Fade left>
                        <button className="part__button__1">{button1}</button>
                    </Fade>
                    {button2 ? <Fade right><button className="part__button__2">{button2}</button></Fade> : null}
                </div>

                {ani ? <Fade top> <div className="part__expand">
                    <ExpandMoreRoundedIcon fontSize="large" />
                </div></Fade> : null
                }

            </div>
        </div>
    )
}

export default Part
