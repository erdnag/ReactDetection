import React from "react";
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
    return(
        <div>
            <p className="f3">
            {'This will detect the plants in your picture.Give it a try.'}
            </p>
            <div className="center">
                <div className=" form pa3 br3 shadow-5">
            <input className="f4 pa2 w-80 center" type = 'text' onChange={onInputChange}/>
            <button className="w-30 grow br-pill ba ph2 mb pv2 bg-blue"
            onClick={onButtonSubmit}
            > Detect </button>
           </div> </div>
        </div>
    )
}

export default ImageLinkForm;