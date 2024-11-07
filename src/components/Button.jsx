import React from 'react'

//new way
// let Button=() =>{

// }

//old (traditional) way

function Button(props){
    return(

        <button onClick={props.click} className={props.class}>{props.label}</button>
    )
}

export default Button