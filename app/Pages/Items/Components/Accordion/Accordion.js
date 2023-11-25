import React, { useState, useEffect, useRef } from 'react'
import "./Accordion.css"
import Chevron from './chevron.svg'

export default function Accordion(props) {

    const [toggleA, setToggleA] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    // useEffect(() => {
    //     console.log(refHeight);
    //     setHeightEl(`${refHeight.current.scrollHeight}px`)
    // }, [])

    const toggleState = () => {
        setToggleA(!toggleA)
    }

    console.log(toggleA);
    return (
        <div className="accordion">

            <button
                onClick={toggleState} className=" btn accordion-visible">
                <span onClick={toggleState} >{props.Title} Lorem ipsum dolor sit amet.</span>
                <img onClick={toggleState} className={toggleA && "active"}  src={Chevron} />
            </button>

            {/* <div
                className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
                ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                {props.Desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                </p>
            </div> */}
 
            <div className={toggleA ? "accordion-toggle animated" : "accordion-toggle"} >
<div >
<img src="" alt="" />
</div>

<div >
            {props.Desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
</div>


            </div>

        </div>
    )
}
