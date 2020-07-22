import React, { useState } from "react";
import axios from "axios"

function Team() {

    const [team, setTeam] = useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.mockaroo.com/api/5c62c7f0?count=6&key=04dddbb0');
            setTeam(response.data);
        }
        fetchData();
    }, []);


    return (
        <div>
            <div className="col-12">
                <div className="mt-5 mb-4">
                    <h2 className="text-center">Our Team</h2>
                    <p className="text-center">Our team consists only of the best talents</p>
                </div>
                <PersonCard team={team} />
            </div>
        </div>
    )
}

const PersonCard = (props) => {

    const people = props.team.map((person) => {
        return (
            <div key={person.id} className="row mt-3 col-xs-12">
                <div className="col-sm-12 col-md-2  person-img-div text-center offset-md-2" >
                    <img src={person.image} className="img-fluid rounded-circle person-img" alt="person" style={{ height: "117px", width: "117px" }} />
                </div>
                <div className="col-sm-12 col-md-6 rounded-lg person-desc-div" >
                    <h5 className="font-weight-normal mb-3">
                        {person.words}
                    </h5>
                    <p className="mb-0 font-weight-bold">{person.fullName}</p>
                    <p className="text-muted">{person.jobTitle}</p>

                </div>
            </div>
        )
    })


    return (
        <div>
            {people}
        </div>
    )
}

export default Team;