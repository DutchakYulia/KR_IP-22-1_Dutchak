export interface Animal {
  id: number;
  name: string;
  type: 'Собака' | 'Кіт' | 'Папуга' | 'Хомяк' | 'Кролик';
  breed: string;
  age: number;
  status: 'Доступний' | 'Зарезервований' | 'Прийнятий';
  description: string;
  image: string;
  characteristics: {
    size: 'Маленький' | 'Середній' | 'Великий';
    energy: 'Низька' | 'Середня' | 'Висока';
    training: 'Легко' | 'Середньо' | 'Складно';
    goodWithKids: boolean;
    goodWithPets: boolean;
  };
  health: {
    vaccinated: boolean;
    sterilized: boolean;
    specialNeeds: string[];
  };
  story: string;
}

export const animals: Animal[] = [
  {
    id: 1,
    name: "Барсик",
    type: "Собака",
    breed: "Золотистий ретривер",
    age: 3,
    status: "Доступний",
    description: "Дружелюбний та енергійний пес, який обожнює гратися з дітьми та іншими тваринами.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Великий",
      energy: "Висока",
      training: "Легко",
      goodWithKids: true,
      goodWithPets: true
    },
    health: {
      vaccinated: true,
      sterilized: true,
      specialNeeds: []
    },
    story: "Барсик був знайдений на вулиці у віці 6 місяців. Завдяки турботі волонтерів він перетворився на справжнього друга сім'ї."
  },
  {
    id: 2,
    name: "Мурка",
    type: "Кіт",
    breed: "Британська короткошерста",
    age: 2,
    status: "Доступний",
    description: "Спокійна та ніжна кицька, яка любить затишок та лагідні поглажування.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Середній",
      energy: "Середня",
      training: "Середньо",
      goodWithKids: true,
      goodWithPets: false
    },
    health: {
      vaccinated: true,
      sterilized: true,
      specialNeeds: []
    },
    story: "Мурка потрапила до притулку після того, як її попередні власники переїхали. Вона дуже скучає за домашнім затишком."
  },
  {
    id: 3,
    name: "Рекс",
    type: "Собака",
    breed: "Німецька вівчарка",
    age: 5,
    status: "Зарезервований",
    description: "Розумний та відданий пес, ідеальний охоронець для активної родини.",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Великий",
      energy: "Висока",
      training: "Легко",
      goodWithKids: true,
      goodWithPets: true
    },
    health: {
      vaccinated: true,
      sterilized: true,
      specialNeeds: ["Потребує щоденних тренувань"]
    },
    story: "Рекс служив у поліції, але після травми лапи був відправлений на пенсію. Він все ще дуже активний та любить працювати."
  },
  {
    id: 4,
    name: "Кеша",
    type: "Папуга",
    breed: "Нерозлучник",
    age: 1,
    status: "Доступний",
    description: "Яскравий та балакучий папуга, який швидко вчиться новим словам.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Маленький",
      energy: "Висока",
      training: "Середньо",
      goodWithKids: true,
      goodWithPets: false
    },
    health: {
      vaccinated: true,
      sterilized: false,
      specialNeeds: ["Потребує спеціальної дієти"]
    },
    story: "Кеша був подарований дитині, але родина не змогла забезпечити належний догляд. Він дуже товариський та любить увагу."
  },
  {
    id: 5,
    name: "Белла",
    type: "Кіт",
    breed: "Мейн-кун",
    age: 4,
    status: "Доступний",
    description: "Велика та пухнаста кицька з дуже спокійним характером.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Великий",
      energy: "Низька",
      training: "Легко",
      goodWithKids: true,
      goodWithPets: true
    },
    health: {
      vaccinated: true,
      sterilized: true,
      specialNeeds: []
    },
    story: "Белла жила з літньою жінкою, яка більше не могла про неї дбати. Вона дуже ласкава та любить спати на сонечку."
  },
  {
    id: 6,
    name: "Джек",
    type: "Собака",
    breed: "Джек-рассел тер'єр",
    age: 2,
    status: "Доступний",
    description: "Енергійний та грайливий маленький пес, який потребує активних прогулянок.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Маленький",
      energy: "Висока",
      training: "Середньо",
      goodWithKids: true,
      goodWithPets: true
    },
    health: {
      vaccinated: true,
      sterilized: true,
      specialNeeds: []
    },
    story: "Джек був знайдений блукаючим біля парку. Попри свій маленький розмір, у нього велике серце та багато енергії."
  },
  {
    id: 7,
    name: "Сніжок",
    type: "Кролик",
    breed: "Карликовий кролик",
    age: 1,
    status: "Доступний",
    description: "М'який та тихий кролик, ідеальний для спокійної родини.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Маленький",
      energy: "Низька",
      training: "Складно",
      goodWithKids: true,
      goodWithPets: false
    },
    health: {
      vaccinated: true,
      sterilized: true,
      specialNeeds: ["Потребує спеціального корму"]
    },
    story: "Сніжок був підкинутий до притулку в коробці. Він дуже боязкий, але поступово довіряє людям."
  },
  {
    id: 8,
    name: "Чіп",
    type: "Хомяк",
    breed: "Сирійський хомяк",
    age: 1,
    status: "Доступний",
    description: "Активний нічний хомяк, який любить бігати в колесі.",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop&crop=faces",
    characteristics: {
      size: "Маленький",
      energy: "Середня",
      training: "Складно",
      goodWithKids: false,
      goodWithPets: false
    },
    health: {
      vaccinated: false,
      sterilized: false,
      specialNeeds: ["Нічна активність"]
    },
    story: "Чіп був принесений до притулку після того, як дитина втратила до нього інтерес. Він потребує терплячого власника."
  }
];

export const animalTypes = ['Всі', 'Собака', 'Кіт', 'Папуга', 'Хомяк', 'Кролик'] as const;
export const animalStatuses = ['Всі', 'Доступний', 'Зарезервований', 'Прийнятий'] as const;
export const animalSizes = ['Всі', 'Маленький', 'Середній', 'Великий'] as const;