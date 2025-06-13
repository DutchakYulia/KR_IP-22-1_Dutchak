import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export const AboutPage = (): JSX.Element => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-[#f1cdb3] hover:text-[#f1cdb3]/80"
          onClick={() => setLocation('/')}
        >
          <ArrowLeft className="mr-2" size={16} />
          Повернутися на головну
        </Button>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <img
              className="w-full max-w-[300px] h-auto object-cover rounded-lg"
              alt="Про притулок"
              src="/figmaAssets/about-pets.png"
            />
          </div>

          <Card className="md:w-2/3 border-none shadow-none">
            <CardContent className="p-0 space-y-6">
              <h1 className="text-[35px] leading-[45.5px] tracking-[2.10px] text-color-dark-l font-normal [font-family:'Georgia-Regular',Helvetica]">
                Про притулок "Затишний Дім"
              </h1>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Наразі у нас на утриманні 121 собака та 342 кішки, і статистика показує, що лише 20% з них знайдуть сім'ю. 
                  Інші продовжать жити з нами і чекатимуть щасливого шансу стати дорогими та коханими.
                </p>
                
                <p>
                  Ми годуємо наших підопічних найкращою їжею та стежимо, щоб вони не хворіли, почувалися комфортно 
                  (включаючи психологічно) та добре. Нас підтримують 87 волонтерів та 28 співробітників різного рівня 
                  кваліфікації. Близько 12% тварин забирають працівники притулку. Доглядаючи за тваринами, вони 
                  прив'язуються до улюбленців і навряд чи коли-небудь залишать їх самих.
                </p>

                <h2 className="text-2xl font-semibold text-color-dark-l mt-8 mb-4">Наша місія</h2>
                <p>
                  Ми віримо, що кожна тварина заслуговує на любов, турботу та затишний дім. Наша мета - не лише надати 
                  тимчасовий притулок безпритульним тваринам, але й знайти для них люблячі сім'ї, які стануть їхніми 
                  назавжди домівками.
                </p>

                <h2 className="text-2xl font-semibold text-color-dark-l mt-8 mb-4">Що ми робимо</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Надаємо медичну допомогу та реабілітацію</li>
                  <li>Забезпечуємо збалансованим харчуванням</li>
                  <li>Проводимо соціалізацію та базове навчання</li>
                  <li>Організовуємо заходи для пошуку нових родин</li>
                  <li>Надаємо підтримку новим власникам</li>
                  <li>Проводимо освітні програми про відповідальне ставлення до тварин</li>
                </ul>

                <h2 className="text-2xl font-semibold text-color-dark-l mt-8 mb-4">Приєднуйтесь до нас</h2>
                <p>
                  Ви можете допомогти нам різними способами: взяти тварину на прийняття, стати волонтером, 
                  зробити пожертву або просто розповісти друзям про наш притулок. Кожна допомога важлива 
                  і робить життя наших підопічних кращим.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};