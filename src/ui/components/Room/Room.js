import React from 'react'

import classNames from 'classnames'

import './Room.css'

export const Room = ({ name, active, index, onClick }) => (
  <div onClick={ () => onClick(index) } className={ classNames("room", active && "active") }>
    <p className="uk-text-center">{ name }</p>
  </div>
)