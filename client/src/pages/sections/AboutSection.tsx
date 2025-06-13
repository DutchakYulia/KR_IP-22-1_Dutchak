import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = (): JSX.Element => {
  // Data for the about section
  const aboutData = {
    title: 'Про притулок "Затишний Дім"',
    paragraphs: [
      "Наразі у нас на утриманні 121 собака та 342 кішки, і статистика показує, що лише 20% з них знайдуть сім'ю. Інші продовжать жити з нами і чекатимуть щасливого шансу стати дорогими та коханими.",
      "Ми годуємо наших підопічних найкращою їжею та стежимо, щоб вони не хворіли, почувалися комфортно (включаючи психологічно) та добре. Нас підтримують 87 волонтерів та 28 співробітників різного рівня кваліфікації. Близько 12% тварин забирають працівники притулку. Доглядаючи за тваринами, вони прив'язуються до улюбленців і навряд чи коли-небудь залишать їх самих.",
    ],
    image: "/figmaAssets/about-pets.png",
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <img
              className="w-full max-w-[300px] h-auto object-cover"
              alt="About pets"
              src={aboutData.image}
            />
          </div>

          <Card className="md:w-2/3 border-none shadow-none">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-[35px] leading-[45.5px] tracking-[2.10px] text-color-dark-l font-normal [font-family:'Georgia-Regular',Helvetica]">
                {aboutData.title}
              </h2>

              {aboutData.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-paragraph-l text-color-dark-xl tracking-[var(--paragraph-l-letter-spacing)] leading-[var(--paragraph-l-line-height)] font-[number:var(--paragraph-l-font-weight)] text-[length:var(--paragraph-l-font-size)] [font-style:var(--paragraph-l-font-style)]"
                >
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
