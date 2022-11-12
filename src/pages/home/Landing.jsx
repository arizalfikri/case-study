import { VStack } from "@chakra-ui/react";

import React from "react";
import SectionPrayerTime from "../../components/prayerTime";
import SectionHero from "../../components/hero";
import Navbar from "../../components/navbar";
import SectionRestaurant from "../../components/restaurants";
import SectionMap from "../../components/map";
import SectionEvent from "../../components/events";
import Footer from "../../components/footer";

export default function Landing() {
  return (
    <>
      <VStack spacing={16} position="relative">
        <Navbar />
        <SectionHero />
        <SectionPrayerTime />
        <SectionRestaurant />
        <SectionMap />
        <SectionEvent />
      </VStack>
      <Footer />
    </>
  );
}
