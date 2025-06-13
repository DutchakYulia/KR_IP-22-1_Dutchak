import { CreditCardIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const DonationSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-color-light-l">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        {/* Donation Dog Image */}
        <div className="md:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-md"
            alt="Donation dog"
            src="/figmaAssets/donation-dog.png"
          />
        </div>

        {/* Donation Information */}
        <div className="md:w-1/2 flex flex-col gap-5">
          <h2 className="font-h-3 text-[35px] text-color-dark-l tracking-[2.10px] leading-[45.5px]">
            Ви також можете зробити пожертву
          </h2>

          <p className="font-h-5 text-color-dark-l text-[15px] tracking-[0.8999999999999999px] leading-[110%]">
            Назва банку / Тип банківського рахунку
          </p>

          <Card className="bg-[#f1cdb3] border-none rounded-[9px] p-0">
            <CardContent className="p-2.5 flex items-center">
              <CreditCardIcon className="w-[30px] h-[23px] mr-[15px] text-color-dark-l" />
              <span className="font-h-4 text-color-dark-l text-xl tracking-[1.20px] leading-[23px]">
                0000 0000 0000 0000
              </span>
            </CardContent>
          </Card>

          <p className="font-normal italic text-color-dark-m text-xs leading-[18px] mt-2">
            Юридична інформація та додаткові відомості про пожертви. Всі кошти
            йдуть на догляд за тваринами, медичне обслуговування, корм та
            утримання притулку. Ми цінуємо вашу підтримку та турботу про
            безпритульних тварин.
          </p>
        </div>
      </div>
    </section>
  );
};
