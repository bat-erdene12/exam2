import React from "react";
import styles from './style.module.css'
import './desk.css'
import { getClasses } from "./getclasses";
import { Link } from "react-router-dom";
import Titles from "../container/titles";


const Desk = ({variant, text,}) =>{
    const titletypes = {
        blue:'blue',
        red:'red',
        black:'black',
        
    }
    return (
        <div className="flex">
            <div>
            <div>
                <h2 className="title">title1</h2>
                <img src="https://tinypng.com/images/social/website.jpg" alt="/" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                </p>
            </div>
            <>
                <Link to={'/title1'}><button className={getClasses([styles.button, styles[`button-${titletypes[variant]}`]])}>
                    <img className={variant === 'blue'} />
                    {text}</button></Link>
            </>
        </div>
        <div>
                <div>
                    <h2 className="title">title2</h2>
                    <img src="https://tinypng.com/images/social/website.jpg" alt="/" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </p>
                </div>
                <>
                    <Link to={'/title2'}><button className={getClasses([styles.button, styles[`button-${titletypes[variant]}`]])}>
                        <img className={variant === 'black'} />
                        {text}</button></Link>
                </>
            </div>
            <div>
                <div>
                    <h2 className="title">title3</h2>
                    <img src="https://tinypng.com/images/social/website.jpg" alt="/" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </p>
                </div>
                <>
                    <Link to={'/title3'}><button className={getClasses([styles.button, styles[`button-${titletypes[variant]}`]])}>
                        <img className={variant === 'red'} />
                        {text}</button></Link>
                </>
            </div>
            </div>
       
    )
}
export default Desk