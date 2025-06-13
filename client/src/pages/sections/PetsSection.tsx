import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocation } from "wouter";
import { Heart, Calendar, Users, PawPrint } from "lucide-react";
import { animals, Animal } from "@/data/animals";

export const PetsSection = (): JSX.Element => {
  const [, setLocation] = useLocation();
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  
  // Use first 3 animals from our data
  const displayedAnimals = animals.slice(0, 3);

  const AnimalDetails = ({ animal }: { animal: Animal }) => (
    <div className="space-y-6">
      <div className="relative">
        <img
          className="w-full h-[300px] object-cover rounded-lg"
          alt={`Тварина ${animal.name}`}
          src={animal.image}
        />
        <Badge 
          className={`absolute top-2 right-2 ${
            animal.status === 'Доступний' ? 'bg-green-500' : 
            animal.status === 'Зарезервований' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
        >
          {animal.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Основна інформація</h3>
          <div className="space-y-2">
            <p><strong>Тип:</strong> {animal.type}</p>
            <p><strong>Порода:</strong> {animal.breed}</p>
            <p><strong>Вік:</strong> {animal.age} {animal.age === 1 ? 'рік' : animal.age < 5 ? 'роки' : 'років'}</p>
            <p><strong>Розмір:</strong> {animal.characteristics.size}</p>
            <p><strong>Статус:</strong> {animal.status}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Характеристики</h3>
          <div className="space-y-2">
            <p><strong>Енергійність:</strong> {animal.characteristics.energy}</p>
            <p><strong>Навчання:</strong> {animal.characteristics.training}</p>
            <p className="flex items-center gap-2">
              <strong>Підходить для дітей:</strong> 
              {animal.characteristics.goodWithKids ? '✅ Так' : '❌ Ні'}
            </p>
            <p className="flex items-center gap-2">
              <strong>Уживається з тваринами:</strong> 
              {animal.characteristics.goodWithPets ? '✅ Так' : '❌ Ні'}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Здоров'я</h3>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <strong>Вакцинований:</strong> 
            {animal.health.vaccinated ? '✅ Так' : '❌ Ні'}
          </p>
          <p className="flex items-center gap-2">
            <strong>Стерилізований:</strong> 
            {animal.health.sterilized ? '✅ Так' : '❌ Ні'}
          </p>
          {animal.health.specialNeeds.length > 0 && (
            <div>
              <strong>Особливі потреби:</strong>
              <ul className="list-disc list-inside mt-1">
                {animal.health.specialNeeds.map((need, index) => (
                  <li key={index} className="text-sm">{need}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Опис</h3>
        <p className="text-gray-700 leading-relaxed">{animal.description}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Історія</h3>
        <p className="text-gray-700 leading-relaxed">{animal.story}</p>
      </div>

      {animal.status === 'Доступний' && (
        <div className="pt-4 border-t">
          <Button className="w-full bg-[#f1cdb3] hover:bg-[#f1cdb3]/90 text-color-dark-3xl rounded-[100px] px-[45px] py-[15px] h-auto">
            <Heart className="mr-2" size={16} />
            <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[17px] tracking-[1.02px] leading-[22.1px]">
              Хочу прийняти
            </span>
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <section className="w-full py-20 bg-color-light-l" id="pets-section">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-color-dark-l text-[35px] tracking-[2.10px] leading-[45.5px] mb-16">
            Наші друзі, які
            <br />
            шукають дім
          </h2>

          <Carousel className="w-full max-w-[1200px]">
            <CarouselContent>
              {displayedAnimals.map((animal) => (
                <CarouselItem
                  key={animal.id}
                  className="md:basis-1/3 lg:basis-1/3"
                >
                  <Card className="bg-color-light-s rounded-[9px] border-none">
                    <CardContent className="p-0 flex flex-col items-center">
                      <img
                        className="w-full h-[270px] object-cover rounded-t-[9px]"
                        alt={`Тварина ${animal.name}`}
                        src={animal.image}
                      />
                      <h3 className="mt-7 mb-7 [font-family:'Georgia-Regular',Helvetica] font-normal text-color-dark-l text-xl text-center tracking-[1.20px]">
                        {animal.name}
                      </h3>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="mb-7 border-2 border-solid border-[#f1cdb3] rounded-[100px] px-[45px] py-[15px] h-auto bg-transparent hover:bg-[#f1cdb3] transition-colors"
                            onClick={() => setSelectedAnimal(animal)}
                          >
                            <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-color-dark-3xl text-[17px] tracking-[1.02px] leading-[22.1px]">
                              Дізнатися більше
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-normal [font-family:'Georgia-Regular',Helvetica]">
                              {animal.name}
                            </DialogTitle>
                          </DialogHeader>
                          <AnimalDetails animal={animal} />
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-26px] bg-transparent border-2 border-[#f1cdb3] hover:bg-[#f1cdb3]" />
            <CarouselNext className="right-[-26px] bg-transparent border-2 border-[#f1cdb3] hover:bg-[#f1cdb3]" />
          </Carousel>

          <Button 
            className="mt-16 bg-[#f1cdb3] hover:bg-[#f1cdb3]/80 rounded-[100px] px-[45px] py-[15px] h-auto"
            onClick={() => setLocation('/animals')}
          >
            <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-color-dark-3xl text-[17px] tracking-[1.02px] leading-[22.1px]">
              Познайомитися з рештою
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
