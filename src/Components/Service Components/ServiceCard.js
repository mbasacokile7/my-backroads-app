import React from "react";

function ServiceCard(props) {
  const { serviceTitle, serviceIcon } = props;
  return (
    <article className="service">
      <span className="service-icon">
        <i className={serviceIcon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{serviceTitle}</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
}

export default ServiceCard;
