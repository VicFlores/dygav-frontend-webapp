import React, { useState } from "react";
import { TouristAccomodationsFav } from "./TouristAccomodationsFav";
import { TourisBlogPostsFav } from "./TourisBlogPostsFav";

export const TouristFavorites = () => {
  const [activeTab, setActiveTab] = useState("accomodations");

  const renderTabContent = () => {
    switch (activeTab) {
      case "accomodations":
        return <TouristAccomodationsFav />;
      case "blogPosts":
        return <TourisBlogPostsFav />;
      default:
        return null;
    }
  };
  return (
    <div className="px-8 space-y-12 mb-24">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]">
        <p className=" text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl">
          {activeTab === "accomodations"
            ? "Mis alojamientos favoritos"
            : "Mis artículos favoritos"}
        </p>

        <ul className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center md:space-x-10 mt-8  lg:text-lg">
          <li
            className={`cursor-pointer ${
              activeTab === "accomodations" ? "text-p600" : ""
            }`}
            onClick={() => setActiveTab("accomodations")}
          >
            Alojamientos
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === "blogPosts" ? "text-p600" : ""
            }`}
            onClick={() => setActiveTab("blogPosts")}
          >
            Articulos
          </li>
        </ul>
      </div>

      {renderTabContent()}
    </div>
  );
};
