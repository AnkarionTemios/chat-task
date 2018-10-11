import React from 'react'

import classNames from 'classnames'

import './Room.css'

export const Room = ({ name, active, onClick }) => (
  <div onClick={ () => onClick(name) } className={ classNames("room", active && "active") }>
    <p className="uk-text-center">{ name }</p>
  </div>
)