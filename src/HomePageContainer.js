import React from "react";
import Header from "./components/header/header.component";
import Welcome from "./components/welcome/welcome.component";
import Description from "./components/description/description.component";
import Clients from "./components/clients/clients.component";
import CardContainer from "./components/cardContainer/cardContainer.component";
import BootstrapThemes from "./components/bootstrapThemes/bootstrapThemes.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Ratings from "./components/ratings/ratings.component";
import Pricing from "./components/pricing/pricing.component";
import Faq from "./components/faq/faq.component";
import GetLandkit from "./components/getLandkit/getLandkit.component";
import Footer from "./components/footer/footer.component";

const HomePageContainer = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Description />
      <Clients />
      <CardContainer />
      <BootstrapThemes />
      <Testimonials />
      <Ratings />
      <Pricing />
      <Faq />
      <GetLandkit />
      <Footer />
    </div>
  );
};

export default HomePageContainer;
