import React from "react";
import { serviceData } from "../data";
import ServiceCard from "./Service Components/ServiceCard";

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {serviceData.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              serviceTitle={service.title}
              serviceIcon={service.icon}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
