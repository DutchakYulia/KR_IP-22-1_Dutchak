import React from "react";
import { Button } from "@/components/ui/button";

export const StartScreenSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[908px] bg-[url(/figmaAssets/start-screen-background.png)] bg-cover bg-center">
      <div className="h-full w-full bg-[url(/figmaAssets/start-screen-gradient-background.svg)] bg-cover">
        <div className="relative w-full max-w-[1200px] h-[728px] pt-[180px] mx-auto px-4">
          <div className="flex flex-row justify-between">
            {/* Text content */}
            <div className="max-w-[460px] mt-[163px]">
              <h2 className="text-white font-h-2 text-[44px] leading-[130%] mb-[41px]">
                Не тільки люди потребують дому
              </h2>

              <p className="font-paragraph-l text-color-dark-s text-[15px] leading-[160%] mb-[42px]">
                Ми пропонуємо дати шанс маленькому та милому песику з 
                надзвичайно широким та відкритим серцем. Він або вона будуть 
                любити вас більше за будь-кого іншого у світі, побачите!
              </p>

              <Button 
                className="bg-[#f1cdb3] hover:bg-[#f1cdb3]/90 text-color-dark-3xl rounded-[100px] px-[45px] py-[15px] h-auto"
                onClick={() => {
                  const petsSection = document.getElementById('pets-section');
                  petsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="font-['Georgia-Regular',Helvetica] font-normal text-[17px] tracking-[1.02px] leading-[22.1px]">
                  Знайти друга
                </span>
              </Button>
            </div>

            {/* Puppy image */}
            <div className="relative">
              <img
                className="w-[698px] h-[728px] object-cover"
                alt="Start screen puppy"
                src="/figmaAssets/start-screen-puppy.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
