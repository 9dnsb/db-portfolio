import React from 'react'
import { iconArray } from '../../types/IconGridType'

function DisplayAllIconsMap() {
  return (
    <div className="iconGrid margin-top-3">
      {iconArray.map((icon) => (
        <div key={icon.icon} className="">
          <i className={icon.icon}></i>
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  )
}

export default DisplayAllIconsMap
