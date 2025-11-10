import React from 'react'

function CoreConcept({image,altText,title,description}) {
  return (
    <li className="core-concept">
        <img src={image} alt={altText} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  )
}

export default CoreConcept