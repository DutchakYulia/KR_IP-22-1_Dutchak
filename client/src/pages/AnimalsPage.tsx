import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, MapPin, Calendar, Users, PawPrint } from "lucide-react";
import { animals, Animal, animalTypes, animalStatuses, animalSizes } from "@/data/animals";

export const AnimalsPage = (): JSX.Element => {
  const [selectedType, setSelectedType] = useState<string>("Всі");
  const [selectedStatus, setSelectedStatus] = useState<string>("Всі");
  const [selectedSize, setSelectedSize] = useState<string>("Всі");
  const [ageRange, setAgeRange] = useState<string>("");
  const [breedFilter, setBreedFilter] = useState<string>("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = useMemo(() => {
    return animals.filter(animal => {
      const typeMatch = selectedType === "Всі" || animal.type === selectedType;
      const statusMatch = selectedStatus === "Всі" || animal.status === selectedStatus;
      const sizeMatch = selectedSize === "Всі" || animal.characteristics.size === selectedSize;
      const breedMatch = !breedFilter || animal.breed.toLowerCase().includes(breedFilter.toLowerCase());
      
      let ageMatch = true;
      if (ageRange) {
        const [min, max] = ageRange.split("-").map(x => parseInt(x.trim()));
        if (!isNaN(min) && !isNaN(max)) {
          ageMatch = animal.age >= min && animal.age <= max;
        } else if (!isNaN(min)) {
          ageMatch = animal.age >= min;
        }
      }

      return typeMatch && statusMatch && sizeMatch && breedMatch && ageMatch;
    });
  }, [selectedType, selectedStatus, selectedSize, ageRange, breedFilter]);

  const AnimalCard = ({ animal }: { animal: Animal }) => (
    <Card className="bg-color-light-s rounded-[9px] border-none hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0 flex flex-col">
        <div className="relative">
          <img
            className="w-full h-[270px] object-cover rounded-t-[9px]"
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
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="[font-family:'Georgia-Regular',Helvetica] font-normal text-color-dark-l text-xl tracking-[1.20px]">
              {animal.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Calendar size={14} />
              {animal.age} {animal.age === 1 ? 'рік' : animal.age < 5 ? 'роки' : 'років'}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {animal.type}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {animal.characteristics.size}
            </Badge>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {animal.breed} • {animal.description}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            {animal.characteristics.goodWithKids && (
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <Users size={12} />
                З дітьми
              </Badge>
            )}
            {animal.characteristics.goodWithPets && (
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <PawPrint size={12} />
                З тваринами
              </Badge>
            )}
            {animal.health.vaccinated && (
              <Badge variant="secondary" className="text-xs">
                Вакцинований
              </Badge>
            )}
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-2 border-solid border-[#f1cdb3] rounded-[100px] px-[45px] py-[15px] h-auto bg-transparent hover:bg-[#f1cdb3] transition-colors"
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
              {selectedAnimal && <AnimalDetails animal={selectedAnimal} />}
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );

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
    <div className="min-h-screen bg-color-light-l">
      <div className="max-w-[1200px] mx-auto px-4 py-8" id="pets-section">
        <h1 className="text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-color-dark-l text-[35px] tracking-[2.10px] leading-[45.5px] mb-8">
          Наші тварини шукають дім
        </h1>

        {/* Фільтри */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Фільтри</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Тип тварини" />
              </SelectTrigger>
              <SelectContent>
                {animalTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                {animalStatuses.map(status => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="Розмір" />
              </SelectTrigger>
              <SelectContent>
                {animalSizes.map(size => (
                  <SelectItem key={size} value={size}>{size}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Вік (наприклад: 1-3)"
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
            />

            <Input
              placeholder="Порода"
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
            />
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Знайдено: {filteredAnimals.length} {filteredAnimals.length === 1 ? 'тварина' : 'тварин'}
            </p>
          </div>
        </div>

        {/* Сітка тварин */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <PawPrint size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Не знайдено тварин
            </h3>
            <p className="text-gray-500">
              Спробуйте змінити фільтри пошуку
            </p>
          </div>
        )}
      </div>
    </div>
  );
};