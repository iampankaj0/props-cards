import React from 'react';


const Card = (props) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-head">
                        <img src={props.imgsec} alt="imagecluture"/>
                    </div>
                    <div className="card-body">
                        <h1>
                            {props.text}
                        </h1>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Card;