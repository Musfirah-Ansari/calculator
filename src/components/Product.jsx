import React from "react";

function(){
    return(
        <React.Fragment>
            <div className='product'>
                <img src={props.src} className='img' />
                <h1>{props.name}</h1>
                <p>{props.price}</p>
                <a href={props.link}>See Details</a>

            </div>
        </React.Fragment>
    )
}

