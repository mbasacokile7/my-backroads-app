import React from "react";
import { tourData } from "../data";
import TourCard from "./Tours Components/TourCard";

function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tourData.map((tour) => {
          return (
            <TourCard
              tourTitle={tour.title}
              tourImg={tour.img}
              tourCountry={tour.country}
              tourDur={tour.duration}
              tourAmount={tour.amount}
              tourDate={tour.date}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
