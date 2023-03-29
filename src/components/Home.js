import React from "react";
import "./Home.css";
import Part from "./Part";

const Home = () => {
  return (
    <div className="home">
      <section id="Model S">
        <Part
          ani={"ani"}
          title={"Model S"}
          desc="Oreder Online for "
          descun="Touchless Delivery"
          bgimg={"/Images/models/model-s.jpg"}
          button1="Custom Order"
          button2="Existing Inventory"
        />
      </section>
      <section id="Model Y">
        <Part
          title="Model Y"
          desc="Oreder Online for "
          descun="Touchless Delivery"
          bgimg={"/Images/modely/model-y.jpg"}
          button1="Custom Order"
          button2="Existing Inventory"
        />
      </section>
      <section id="Model 3">
        <Part
          title="Model 3"
          desc="Oreder Online for "
          descun="Touchless Delivery"
          bgimg={"/Images/model3/model-3.jpg"}
          button1="Custom Order"
          button2="Existing Inventory"
        />
      </section>
      <section id="Model X">
        <Part
          title="Model X"
          desc="Oreder Online for "
          descun="Touchless Delivery"
          bgimg={"Images/modelx/model-x.jpg"}
          button1="Custom Order"
          button2="Existing Inventory"
        />
      </section>
      <section id="solr Panels">
        <Part
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          bgimg={"/Images/solar-panels/solar-panel.jpg"}
          button1="Order Now"
          button2="Learn more"
        />
      </section>
      <section id="Solar Roof">
        <Part
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          bgimg={"/Images/solar-roof/solar-roof.jpg"}
          button1="Order Now"
          button2="Learn more"
        />
      </section>
      <section id="Accessories">
        <Part
          title="Accessories"
          bgimg={"/Images/accessories/accessories.jpg"}
          button1="shop now"
        />
      </section>
    </div>
  );
};

export default Home;
