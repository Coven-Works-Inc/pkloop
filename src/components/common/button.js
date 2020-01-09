import React from 'react';
import './common.css'

const Button = props => {
    return (
        <button
            onClick={props.type ? () => props.modal(props.type) : null}
            style={{
                color: props.color,
                backgroundColor: props.backgroundColor,
                border: props.backgroundColor,
                outline: 'none'
            }}
            className='reusable-button'
        >
            {props.children}
        </button>
    )
}
export default Button