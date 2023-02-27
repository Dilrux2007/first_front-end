import "./section1.css"
import React from 'react'

export default function Section1() {
    return (
        <div>
            <div className="container">
                <div className="row parent">
                    <div className="col-1 vector"></div>
                    <div className="col-3 ">
                        <h4 className="bring">Bringing The Value of Comfortness</h4>
                    </div>
                    <div className="col-7 lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <h1 className="hundres">Hundreds Places to Incerease  Your Productivity</h1>
                    <div className="col-4 ">
                        <div className="meeting"></div>
                        <div className="style">
                        <h1 className="meeting_space">Meeting Space</h1>
                        <a href="!#" className="find_one">Find One </a>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="meeting_two"></div>
                        <div style={{display: "flex"}}>
                        <h1 className="meeting_space_two">office Space</h1>
                        <a href="!#" className="find_one_two">Find One </a>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="meeting_three"></div>
                        <div style={{display: "flex"}}>
                        <h1 className="meeting_space_three">Private Space</h1>
                        <a href="!#" className="find_one_three">Find One </a>
                        </div>
                    </div>

                    <button className="show">Show All Lists</button>
                </div>
            </div>
        </div>
    )
}
