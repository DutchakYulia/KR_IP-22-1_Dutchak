import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, MailIcon, MapPinIcon, PhoneIcon, Clock } from "lucide-react";

export const ContactPage = (): JSX.Element => {
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

        <h1 className="text-[35px] leading-[45.5px] tracking-[2.10px] text-color-dark-l font-normal [font-family:'Georgia-Regular',Helvetica] mb-8 text-center">
          Контактна інформація
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контактні дані */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-color-dark-l mb-6">З питань та пропозицій</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-[#f1cdb3]" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+38 067 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MailIcon className="w-6 h-6 text-[#f1cdb3]" />
                  <div>
                    <p className="font-semibold">Електронна пошта</p>
                    <p className="text-gray-600">email@pritulok.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[#f1cdb3] mt-1" />
                  <div>
                    <p className="font-semibold">Години роботи</p>
                    <div className="text-gray-600">
                      <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
                      <p>Субота: 10:00 - 16:00</p>
                      <p>Неділя: вихідний</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Адреси */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-color-dark-l mb-6">Чекаємо на ваш візит</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-6 h-6 text-[#f1cdb3] mt-1" />
                  <div>
                    <p className="font-semibold">Головний офіс</p>
                    <p className="text-gray-600">вул. Центральна 1, Івано-Франківськ</p>
                    <p className="text-sm text-gray-500">(вхід з боку магазину)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-6 h-6 text-[#f1cdb3] mt-1" />
                  <div>
                    <p className="font-semibold">Філія у Львові</p>
                    <p className="text-gray-600">вул. Садова 18, Львів</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Додаткова інформація */}
          <Card className="border border-gray-200 shadow-sm md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-color-dark-l mb-4">Як до нас дістатися</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Громадський транспорт (Івано-Франківськ)</h3>
                  <ul className="text-gray-600 space-y-1">
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Автомобілем</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Безкоштовна парковка поруч з будівлею</li>
                    <li>• Вхід з боку вул. Центральної</li>
                    <li>• GPS координати: 50.4501, 30.5234</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-800">Важливо знати перед візитом</h3>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Візити до тварин тільки за попередньою домовленістю</li>
                  <li>• При собі мати документ, що посвідчує особу</li>
                  <li>• Дітей до 16 років супроводжують дорослі</li>
                  <li>• Заборонено приносити їжу для тварин без узгодження</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};