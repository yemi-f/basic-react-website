import React from "react";
import Heart from "./images/Heart.png";
import Smile from "./images/Smile.png";

function About() {
    return (
        <div style={{ padding: "8px" }}>
            <h1 className="mb-3">About Us</h1>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <img src={Smile} className="img-fluid" alt="emoticon" />
                </div>
                <div className="col-sm-12 col-md-6 my-auto pt-4">
                    <h5 className="font-weight-normal py-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae.
                        Faucibus et molestie ac feugiat.
                     </h5>
                    <h5 className="font-weight-normal py-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae.
                        Faucib
                    </h5>
                    <h5 className="font-weight-normal py-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae.
                        Faucib
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 text-center my-auto">
                    <h1 className="py-3">Made with <span role="img" aria-label="love">&#10084;&#65039;</span> in Ottawa</h1>
                </div>
                <div className="col-sm-12 col-md-6 my-auto">
                    <img src={Heart} className="img-fluid" alt="heart" />
                </div>
            </div>
        </div>
    )
}

export default About;