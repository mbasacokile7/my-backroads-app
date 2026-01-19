import React from "react";

function TourCard(props) {
  const { tourTitle, tourImg, tourCountry, tourAmount, tourDur, tourDate } =
    props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tourImg} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {tourCountry}
          </p>
          <p>{tourDur}</p>
          <p>{tourAmount}</p>
        </div>
      </div>
    </article>
  );
}

export default TourCard;
