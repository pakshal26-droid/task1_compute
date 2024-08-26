import React from "react";
import Hero from "./Pages/Hero/Hero";
import Services from "./Pages/Services/Services";
import Destinations from "./Pages/Destinations/Destinations";
import Booking from "./Pages/Booking/Booking";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Subscribe from "./Pages/Subscribe/Subscribe";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Destinations />
      <Booking />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
