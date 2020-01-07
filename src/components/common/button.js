import React from 'react';
import './common.css'

const Button = props => {
    return(
        <button style={{color: props.color, backgroundColor: props.backgroundColor, border: props.backgroundColor}} className='reusable-button'>{props.children}</button>
    )
}
export default Button