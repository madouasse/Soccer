import React from "react";
import { BigHead } from '@bigheads/core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Soccer from "../Soccer";
import firebase from "firebase";
import bus from "../img/bus.svg"

var lashes = true
var maskFace = true

class Parking extends React.Component {
    render() 
        {
            return(
            <div>
                <img src={bus}></img>
            </div>
            )
        }
    }
export default Parking;
