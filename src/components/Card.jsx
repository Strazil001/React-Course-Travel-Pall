import React from "react";
import LocationIcon from "../assets/location-icon.png";
import "./Card.css";

export default function (props) {
  return (
    <div className="card">
      <img className="card--image" alt="Vacation image" src={props.imageUrl} />
      <div className="card--infobox">
        <div className="card--infobox_location_container">
          <img className="card--location_icon" alt="" src={LocationIcon} />
          <span className="card--location_title">{props.title}</span>
          <span className="card--location_name">{props.location}</span>
          <a
            className="card--location_googlemaps_link"
            href={props.googleMapsUrl}
          ></a>
        </div>
        <div className="card--datebox">
          <span className="card--startdate">{props.startDate}</span>
          <span className="card--enddate">{props.endDate}</span>
        </div>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
