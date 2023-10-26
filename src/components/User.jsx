import React from "react";
import { useContext } from "react";
import { UsernameContext } from "./UsernameContext";

import "../styles/User.css"

export default function User() {

    const {username, setUsername} = useContext(UsernameContext)

    return (
    <div className="userContainer">
        <p>Hello {username}</p>
    </div>
)}