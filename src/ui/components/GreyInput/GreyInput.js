import React from 'react'

import classNames from 'classnames'

import './GreyInput.css'

export const GreyInput = ({ type, onChange, value, className, name, placeholder }) => (
  <input 
    type={ type }
    name={ name }
    value={ value } 
    onChange={ onChange }
    placeholder={ placeholder }
    className={ classNames("grey-input", className) } />
) 