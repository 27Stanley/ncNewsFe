import React from "react";
import { useState } from "react";

import "../styles/User.css"

export default function User() {

    const [user, setUser] = useState("jessjelly")

    return (
    <div className="userContainer">
        <p>Hello: {user}</p>
    </div>
)}