import React, { useState } from "react";

function Register() {

    const [spotsRemaining, setSpotsRemaining] = useState(32);
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
    });

    const nameOnChange = (e) => {
        setInputValue({ name: e.target.value, email: inputValue.email })
    }

    const emailOnChange = (e) => {
        setInputValue({ name: inputValue.name, email: e.target.value })
    }

    const updateSpotsRemaining = (e) => {
        e.preventDefault();
        setInputValue({ name: "", email: "" });
        setSpotsRemaining(spotsRemaining - 1);
        console.log("name: " + inputValue.name + "\nemail: " + inputValue.email)
    }

    return (
        <div className="form-outer-div row h-100">
            <div className="col my-auto">
                <p className="text-muted text-center">{spotsRemaining} spots remaining</p>

                <form className="form-register" onSubmit={updateSpotsRemaining}>
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please register</h1>
                    <label htmlFor="inputName" className="sr-only">Name</label>
                    <input type="text" id="inputName" className="form-control mb-1" placeholder="Name" required
                        value={inputValue.name} onChange={nameOnChange} />
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus=""
                        value={inputValue.email} onChange={emailOnChange} />
                    <input type="submit" value="Register" className="btn btn-lg btn-primary btn-block my-4" />
                </form>
            </div>
        </div>
    )
}

export default Register;