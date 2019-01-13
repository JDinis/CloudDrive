import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}>
            <p>Wellcome</p>
            <NavLink to="/File">File</NavLink>
            <br/>
            <NavLink to="/Chat">Chat</NavLink>
    </div>
  );
}