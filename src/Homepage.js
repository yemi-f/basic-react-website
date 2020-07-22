import React from "react";
import Tablet from "./images/Tablet.png";
import Team from "./Team";

function Homepage() {
    return (
        <>
            <div className="row col-xs-12 mx-auto">
                <div className="col-sm-12 col-md-6 py-5 my-auto">
                    <h1 className="py-2">We take care of your health</h1>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. </p>
                    <div className="row">
                        <div className="col-6" style={{ paddingRight: "12px" }}><button type="button" className="btn btn-primary btn-lg w-100 rounded-lg" >Explore</button></div>
                        <div className="col-6" style={{ paddingLeft: "12px" }}><button type="button" className="btn btn-secondary btn-lg w-100 rounded-lg" >Our App</button></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={Tablet} alt="landing-page-img" />
                </div>
            </div>
            <Team />
        </>
    )
}

export default Homepage;