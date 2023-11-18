import React from 'react'

import './form-input-style.scss'

const FormInput = ({label, changeHandler, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={changeHandler} {...otherProps} />
            <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>{label}</label>
        </div>
    )
}

export default FormInput;