import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const HelpSection = (): JSX.Element => {
  // Data for help categories
  const helpCategories = [
    // Top row
    {
      id: 1,
      name: "Корм для тварин",
      icon: "/figmaAssets/icon-pet-food.svg",
    },
    {
      id: 2,
      name: "Транспортування",
      icon: "/figmaAssets/icon-transportation.svg",
    },
    {
      id: 3,
      name: "Іграшки",
      icon: "/figmaAssets/icon-toys.svg",
    },
    {
      id: 4,
      name: "Миски та чашки",
      icon: "/figmaAssets/icon-bowls-and-cups.svg",
    },
    {
      id: 5,
      name: "Шампуні",
      icon: "/figmaAssets/icon-shampoos.svg",
    },
    // Bottom row
    {
      id: 6,
      name: "Вітаміни",
      icon: "/figmaAssets/icon-vitamins.svg",
    },
    {
      id: 7,
      name: "Ліки",
      icon: "/figmaAssets/icon-medicines.svg",
    },
    {
      id: 8,
      name: "Нашийники / повідці",
      icon: "/figmaAssets/icon-collars-leashes.svg",
    },
    {
      id: 9,
      name: "Місця для сну",
      icon: "/figmaAssets/icon-sleeping-area.svg",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <Card className="border-none shadow-none mx-auto max-w-[1200px]">
        <CardContent className="p-0">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-[35px] text-color-dark-l [font-family:'Georgia-Regular',Helvetica] font-normal tracking-[2.10px] leading-[45.5px] mb-16">
              Як ви можете допомогти
              <br />
              нашому притулку
            </h2>

            <div className="grid grid-cols-5 gap-x-8 gap-y-12 max-w-[1026px] mx-auto">
              {helpCategories.slice(0, 5).map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  <img
                    className="w-[60px] h-[60px] mb-7"
                    alt={`Icon ${category.name.toLowerCase()}`}
                    src={category.icon}
                  />
                  <div className="text-color-dark-l text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-xl tracking-[1.20px] leading-[23px] whitespace-nowrap">
                    {category.name}
                  </div>
                </div>
              ))}

              {helpCategories.slice(5).map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  <img
                    className="w-[60px] h-[60px] mb-7"
                    alt={`Icon ${category.name.toLowerCase()}`}
                    src={category.icon}
                  />
                  <div className="text-color-dark-l text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-xl tracking-[1.20px] leading-[23px] whitespace-nowrap">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
