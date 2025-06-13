import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useLocation } from "wouter";

export const HeaderSection = (): JSX.Element => {
  const [, setLocation] = useLocation();
  
  // Navigation menu items data
  const menuItems = [
    { text: "Про притулок", path: "/about" },
    { text: "Наші тварини", path: "/animals" },
    { text: "Допомогти притулку", path: "/help" },
    { text: "Контакти", path: "/contact" },
  ];

  return (
    <header className="w-full h-[80px] py-4 flex justify-between items-center bg-gray-50 border-b border-gray-200 px-6">
      <div className="flex-shrink-0">
        <img
          className="w-[184px] h-[60px]"
          alt="Logo"
          src="/figmaAssets/logo.svg"
        />
      </div>

      <NavigationMenu className="flex-grow-0">
        <NavigationMenuList className="flex gap-12">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index} className="relative">
              <NavigationMenuLink
                className="font-paragraph-l text-[18px] font-medium tracking-[0.5px] leading-[24px] whitespace-nowrap text-color-dark-s hover:text-[#f1cdb3] hover:bg-[#f1cdb3]/10 cursor-pointer transition-all duration-200 px-4 py-2 rounded-lg"
                onClick={() => setLocation(item.path)}
              >
                {item.text}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};