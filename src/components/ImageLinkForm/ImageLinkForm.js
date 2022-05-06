import React from "react";
import './ImageLinkForm.css'
const ImageLinkForm = () =>{
    return(
        <div>
            <p className="f3">
            {'This will detect the plants in your picture.Give it a photo link.'}
            </p>
            <div className="center">
                <div className=" form pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type = 'text'/>
            <button className="w-30 grow br-pill ba ph3 mb2 pv2 bg-blue"> Detect </button>
           </div> </div>
        </div>
    )
}

export default ImageLinkForm;