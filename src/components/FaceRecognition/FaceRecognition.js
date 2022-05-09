import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className="center" >
        <br/>
            <img alt='' src={imageUrl} width='auto' height='300px' />
        </div>
    );
}

export default FaceRecognition;