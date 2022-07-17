import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (

        // We used && operator because if props.alert is null then no need to check further
        // if props.alert is not null then move to forward
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            
        </div>
    )
}
