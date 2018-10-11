import React from 'react'

import classNames from 'classnames'

import './GreyInput.css'

export const GreyInput = ({ type, onChange, value, className, name, placeholder, disabled }) => (
  <input 
    type={ type }
    name={ name }
    value={ value } 
    onChange={ onChange }
    disabled={ disabled }
    placeholder={ placeholder }
    className={ classNames("grey-input", className) } 
  />
) 