export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subcategory: string;
  inStock: boolean;
  specifications: {
    [key: string]: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: {
    id: string;
    name: string;
    products: Product[];
  }[];
}

export const testProducts: Product[] = [
  {
    id: "1",
    name: "Штукатурка гипсовая Knauf Ротбанд 30 кг",
    price: 599,
    image: "/images/products/rotband.jpg",
    description: "Универсальная штукатурка для внутренних работ. Подходит для всех типов оснований.",
    category: "Строительные материалы",
    subcategory: "Сухие смеси",
    inStock: true,
    specifications: {
      "Вес": "30 кг",
      "Производитель": "Knauf",
      "Тип": "Гипсовая",
      "Назначение": "Внутренние работы",
      "Расход": "8-9 кг/м²"
    }
  },
  {
    id: "2",
    name: "Цемент ПЦ-500 50 кг",
    price: 450,
    image: "/images/products/cement.jpg",
    description: "Портландцемент марки 500, универсальный.",
    category: "Строительные материалы",
    subcategory: "Сухие смеси",
    inStock: true,
    specifications: {
      "Вес": "50 кг",
      "Марка": "ПЦ-500",
      "Тип": "Портландцемент",
      "Применение": "Универсальное"
    }
  },
  {
    id: "3",
    name: "Ламинат Tarkett Holiday Дуб Светлый 32 класс",
    price: 899,
    image: "/images/products/laminate.jpg",
    description: "Износостойкий ламинат 32 класса для жилых помещений.",
    category: "Напольные покрытия",
    subcategory: "Ламинат",
    inStock: true,
    specifications: {
      "Класс": "32",
      "Толщина": "8 мм",
      "Размер планки": "1292x194 мм",
      "Фаска": "4V",
      "Производитель": "Tarkett",
      "Коллекция": "Holiday"
    }
  },
  {
    id: "4",
    name: "Кабель ВВГнг 3х1.5",
    price: 45,
    image: "/images/products/cable.jpg",
    description: "Кабель силовой с медными жилами, негорючий.",
    category: "Электрика",
    subcategory: "Кабели и провода",
    inStock: true,
    specifications: {
      "Сечение": "3х1.5 мм²",
      "Тип": "ВВГнг",
      "Длина": "1 м",
      "Материал жил": "Медь",
      "Количество жил": "3"
    }
  },
  {
    id: "5",
    name: "Розетка двойная Schneider Electric Glossa",
    price: 299,
    image: "/images/products/socket.jpg",
    description: "Розетка с заземлением, белая, для скрытого монтажа.",
    category: "Электрика",
    subcategory: "Розетки и выключатели",
    inStock: true,
    specifications: {
      "Тип": "Розетка двойная",
      "Цвет": "Белый",
      "Производитель": "Schneider Electric",
      "Серия": "Glossa",
      "Монтаж": "Скрытый"
    }
  }
];

export const testCategories: Category[] = [
  {
    id: "1",
    name: "Строительные материалы",
    icon: "/images/categories/building-materials.svg",
    subcategories: [
      {
        id: "1-1",
        name: "Сухие смеси",
        products: testProducts.filter(p => p.subcategory === "Сухие смеси")
      },
      {
        id: "1-2",
        name: "Цемент",
        products: testProducts.filter(p => p.subcategory === "Цемент")
      }
    ]
  },
  {
    id: "2",
    name: "Напольные покрытия",
    icon: "/images/categories/flooring.svg",
    subcategories: [
      {
        id: "2-1",
        name: "Ламинат",
        products: testProducts.filter(p => p.subcategory === "Ламинат")
      },
      {
        id: "2-2",
        name: "Линолеум",
        products: testProducts.filter(p => p.subcategory === "Линолеум")
      }
    ]
  },
  {
    id: "3",
    name: "Электрика",
    icon: "/images/categories/electrical.svg",
    subcategories: [
      {
        id: "3-1",
        name: "Кабели и провода",
        products: testProducts.filter(p => p.subcategory === "Кабели и провода")
      },
      {
        id: "3-2",
        name: "Розетки и выключатели",
        products: testProducts.filter(p => p.subcategory === "Розетки и выключатели")
      }
    ]
  }
];

// Функция для получения товара по ID
export const getProductById = (id: string): Product | undefined => {
  return testProducts.find(product => product.id === id);
};

// Функция для получения категории по ID
export const getCategoryById = (id: string): Category | undefined => {
  return testCategories.find(category => category.id === id);
};

// Функция для получения подкатегории по ID категории и ID подкатегории
export const getSubcategoryById = (categoryId: string, subcategoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
};

// Функция для поиска товаров
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return testProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
}; 