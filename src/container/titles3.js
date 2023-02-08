import React from "react";
import TitlesData from "../components/data/data";
import zurag from '../assets/download.png'
import './titles.css'

const Titles3 = () =>{
    const data = [
        {
            key:1,
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            title:'title3',
            img:zurag,
        },
    ]
    return(
        <div className="contain">
        {
            data.map((row)=>(
                <div className="">
                    <div >
                        <h1>{row.title}</h1>
                    </div>
                    <div>
                        <img src={row.img} alt="/"/>
                    </div>
                    <div>
                        <p>{row.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
    )
}
export default Titles3