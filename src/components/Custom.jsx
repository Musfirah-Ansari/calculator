import React from "react";

function Custom({isHeading, text, class}) {
    if(isHeading){
        return <h1 className={styles}>{text}</h1>
    }
    return <what className={styles}>{text}</what>
}