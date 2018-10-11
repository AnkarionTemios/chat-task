import React from 'react'

import classNames from 'classnames'

import './PurpleButton.css'

export const PurpleButton = ({ onClick, disabled, type, className, children }) => (
  <button 
    type={ type } 
    onClick={ onClick } 
    disabled={ disabled } 
    className={ classNames("purple-button", className) }
  >
    { children }
  </button>
)