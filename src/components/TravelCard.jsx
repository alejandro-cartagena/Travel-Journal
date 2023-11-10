import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function TravelCard(props) {
  console.log(props.item.imageUrl)

  return (
    <div className="travel-card">
        <img className="card-img" src={props.item.imageUrl} alt="" />
        <div>
          <div className="card-location-container">
            <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
            <p className="card-location">{props.item.location}</p>
            <a href={props.item.googleMapsUrl} className="card-map-url">View on Google Maps</a>
          </div>
          <h1 className="card-title">{props.item.title}</h1>
          <p className="card-date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
          <p className="card-description">{props.item.description}</p>

        </div>
        
    </div>

    
  )
}

export default TravelCard