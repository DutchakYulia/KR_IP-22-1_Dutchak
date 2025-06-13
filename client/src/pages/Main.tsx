import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { DonationSection } from "./sections/DonationSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HelpSection } from "./sections/HelpSection";
import { PetsSection } from "./sections/PetsSection";
import { StartScreenSection } from "./sections/StartScreenSection";

export const Main = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1280px] relative">
        <div className="w-full">
          <StartScreenSection />
          <HeaderSection />
          <AboutSection />
          <PetsSection />
          <HelpSection />
          <DonationSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
