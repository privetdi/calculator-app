import React from "react";
import CalLeft from "./calculator_left";
import CalRight from "./calculator_right";
import "./layout.scss";

function Layout(){
    return(<div className="layout">
    <CalLeft />
    <CalRight />
    </div>)
}

export default Layout;