import React from "react";
import Tilt from "react-tilt";
import leaf from './logo.png'
const Logo = () =>{
    return(
        <div>
        <Tilt className='Tilt br2 shadow-2' options={{max: 25}} style={{height:120, width:120}} >
        <div className="Tilt-inner pa3"> <img alt='logo' src= {leaf}/></div></Tilt>
        </div>
    )
}

export default Logo;