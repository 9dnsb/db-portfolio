import React from 'react'
import { iconArray } from '../../types/IconGridType'

function DisplayAllIconsMap() {
  return (
    <div className="card" id="skillsCard">
      <h2 className="margin-top-5 margin-left-2 margin-right-2">
        The skills, tools and technologies I use to bring your products to life:
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
