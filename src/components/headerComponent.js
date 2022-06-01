import React from "react";
import moment from "moment";
import PropType from "prop-types";

function Header(date) {

    return (<div className="header">
        <h1>Work Todo</h1>
        <p>A simple work todo schedule</p>
           Today {moment(date).format("MMMM Do YYYY")}
        </div>
    )
}

export default Header; 

Header.prototype = {
    date: PropType.number.isRequired
}
