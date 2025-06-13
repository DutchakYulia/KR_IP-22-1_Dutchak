import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = {
    title: "З питань та пропозицій",
    email: {
      icon: <MailIcon className="w-6 h-6 text-color-primary" />,
      text: "email@pritulok.com",
    },
    phone: {
      icon: <PhoneIcon className="w-6 h-6 text-color-primary" />,
      text: "+38 067 123 45 67",
    },
  };

  // Location information data
  const locationInfo = {
    title: "Чекаємо на ваш візит",
    locations: [
      {
        address: "вул. Центральна 1,Івано-Франківськ (вхід з боку магазину)",
        icon: <MapPinIcon className="w-6 h-6 text-color-primary" />,
      },
      {
        address: "вул. Карпатська 19 Іфано-Франківськ",
        icon: <MapPinIcon className="w-6 h-6 text-color-primary" />,
      },
    ],
  };

  return (
    <footer className="relative w-full h-[350px] bg-transparent bg-[url(/figmaAssets/footer-background.png)] bg-cover bg-center">
      <div className="w-full h-full bg-[url(/figmaAssets/footer-gradient-background.svg)] bg-cover">
        <div className="container mx-auto px-10 py-10 h-full max-w-[1200px] relative">
          {/* Puppy image */}
          <div className="absolute right-0 top-0 h-[310px] w-[300px]">
            <img
              className="w-full h-full object-cover"
              alt="Footer puppy"
              src="/figmaAssets/footer-puppy.png"
            />
          </div>

          {/* Contact information section */}
          <div className="relative w-[278px] h-[234px]">
            <h3 className="font-h-3 font-[number:var(--h-3-font-weight)] text-color-light-xl text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              {contactInfo.title}
            </h3>

            <div className="mt-[130px] flex items-center">
              {contactInfo.email.icon}
              <span className="ml-[20px] font-h-4 font-[number:var(--h-4-font-weight)] text-color-primary text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                {contactInfo.email.text}
              </span>
            </div>

            <div className="mt-[42px] flex items-center">
              {contactInfo.phone.icon}
              <span className="ml-[20px] font-h-4 font-[number:var(--h-4-font-weight)] text-color-primary text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                {contactInfo.phone.text}
              </span>
            </div>
          </div>

          {/* Location information section */}
          <div className="absolute left-[438px] top-4 w-[302px] h-[234px]">
            <h3 className="font-h-3 font-[number:var(--h-3-font-weight)] text-color-light-xl text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
              {locationInfo.title}
            </h3>

            <div className="mt-[124px] flex items-start">
              {locationInfo.locations[0].icon}
              <span className="ml-[20px] font-h-4 font-[number:var(--h-4-font-weight)] text-color-primary text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                {locationInfo.locations[0].address}
              </span>
            </div>

            <div className="mt-[32px] flex items-center">
              {locationInfo.locations[1].icon}
              <span className="ml-[20px] font-h-4 font-[number:var(--h-4-font-weight)] text-color-primary text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                {locationInfo.locations[1].address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
