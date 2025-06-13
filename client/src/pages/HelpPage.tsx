import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, Heart, CreditCard } from "lucide-react";

export const HelpPage = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const helpCategories = [
    { name: "Корм для тварин", icon: "/figmaAssets/icon-pet-food.svg" },
    { name: "Транспортування", icon: "/figmaAssets/icon-transportation.svg" },
    { name: "Іграшки", icon: "/figmaAssets/icon-toys.svg" },
    { name: "Миски та чашки", icon: "/figmaAssets/icon-bowls-and-cups.svg" },
    { name: "Шампуні", icon: "/figmaAssets/icon-shampoos.svg" },
    { name: "Вітаміни", icon: "/figmaAssets/icon-vitamins.svg" },
    { name: "Ліки", icon: "/figmaAssets/icon-medicines.svg" },
    { name: "Нашийники / повідці", icon: "/figmaAssets/icon-collars-leashes.svg" },
    { name: "Місця для сну", icon: "/figmaAssets/icon-sleeping-area.svg" },
  ];

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

        <h1 className="text-[35px] leading-[45.5px] tracking-[2.10px] text-color-dark-l font-normal [font-family:'Georgia-Regular',Helvetica] mb-8 text-center">
          Як ви можете допомогти нашому притулку
        </h1>

        {/* Способи допомоги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border border-gray-200 shadow-sm text-center">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-[#f1cdb3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Волонтерство</h3>
              <p className="text-gray-600 mb-4">
                Приєднуйтесь до нашої команди волонтерів. Допомагайте у догляді за тваринами, 
                організації заходів та пошуку нових домівок.
              </p>
              <Button className="bg-[#f1cdb3] hover:bg-[#f1cdb3]/90 text-black">
                Стати волонтером
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm text-center">
            <CardContent className="p-6">
              <CreditCard className="w-12 h-12 text-[#f1cdb3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Фінансова підтримка</h3>
              <p className="text-gray-600 mb-4">
                Ваші пожертви допомагають нам купувати корм, ліки та забезпечувати 
                медичну допомогу нашим підопічним.
              </p>
              <Button className="bg-[#f1cdb3] hover:bg-[#f1cdb3]/90 text-black">
                Зробити пожертву
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#f1cdb3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-black">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Матеріальна допомога</h3>
              <p className="text-gray-600 mb-4">
                Приносьте корм, іграшки, медикаменти та інші необхідні речі 
                для комфортного життя тварин.
              </p>
              <Button className="bg-[#f1cdb3] hover:bg-[#f1cdb3]/90 text-black">
                Що потрібно
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Список необхідних речей */}
        <Card className="border border-gray-200 shadow-sm mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Що нам найбільше потрібно</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    className="w-[60px] h-[60px] mb-4"
                    alt={`Іконка ${category.name.toLowerCase()}`}
                    src={category.icon}
                  />
                  <div className="text-color-dark-l [font-family:'Georgia-Regular',Helvetica] font-normal text-lg">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Детальна інформація */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Волонтерські програми</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Догляд за тваринами та прибирання</li>
                <li>• Вигул собак та соціалізація</li>
                <li>• Допомога у ветеринарних процедурах</li>
                <li>• Фотографування тварин для сайту</li>
                <li>• Організація заходів та виставок</li>
                <li>• Транспортування тварин</li>
                <li>• Адміністративна робота</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Як стати волонтером</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>1.</strong> Зв'яжіться з нами за телефоном або email</p>
                <p><strong>2.</strong> Пройдіть коротке співбесідування</p>
                <p><strong>3.</strong> Відвідайте ознайомчу екскурсію</p>
                <p><strong>4.</strong> Оберіть зручний графік роботи</p>
                <p><strong>5.</strong> Пройдіть інструктаж з безпеки</p>
                <p><strong>6.</strong> Почніть допомагати нашим підопічним!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Банківські реквізити */}
        <Card className="border border-gray-200 shadow-sm mt-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img
                  className="w-full h-auto object-cover rounded-md"
                  alt="Пожертва"
                  src="/figmaAssets/donation-dog.png"
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Зробити пожертву</h3>
                <p className="text-gray-600 mb-4">
                  Назва банку / Тип банківського рахунку
                </p>
                
                <Card className="bg-[#f1cdb3] border-none rounded-[9px] p-0 mb-4">
                  <CardContent className="p-2.5 flex items-center">
                    <CreditCard className="w-[30px] h-[23px] mr-[15px] text-color-dark-l" />
                    <span className="font-h-4 text-color-dark-l text-xl tracking-[1.20px] leading-[23px]">
                      0000 0000 0000 0000
                    </span>
                  </CardContent>
                </Card>
                
                <p className="font-normal italic text-color-dark-m text-xs leading-[18px]">
                  Юридична інформація та додаткові відомості про пожертви. Всі кошти
                  йдуть на догляд за тваринами, медичне обслуговування, корм та
                  утримання притулку. Ми цінуємо вашу підтримку та турботу про
                  безпритульних тварин.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};