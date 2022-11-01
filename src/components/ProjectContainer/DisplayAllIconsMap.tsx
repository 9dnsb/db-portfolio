import React from 'react'
import { iconArray } from '../../types/IconGridType'

function DisplayAllIconsMap() {
  return (
    <div className="card" id="skillsCard">
      <h2 className="margin-top-5 margin-left-2 margin-right-2 margin-bottom-2">
        I use these skills, tools, and technologies to bring products to life:
      </h2>
      <div className="iconGrid margin-top-3">
        {iconArray.map((icon) => (
          <div key={icon.icon} className="">
            <i className={icon.icon}></i>
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayAllIconsMap
