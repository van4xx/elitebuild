export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  image: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const catalogData = [
  {
    category: "Строительные материалы",
    subcategories: [
      {
        name: "Общестроительные материалы",
        subcategory2: [
          {
            name: "Сухие смеси",
            products: [
              { id: "1", name: "Штукатурка", price: 0, image: "", description: "" },
              { id: "2", name: "Шпатлевка", price: 0, image: "", description: "" },
              { id: "3", name: "Наливной пол", price: 0, image: "", description: "" },
              { id: "4", name: "Плиточный клей", price: 0, image: "", description: "" },
              { id: "5", name: "Цемент", price: 0, image: "", description: "" },
              { id: "6", name: "Гипс", price: 0, image: "", description: "" }
            ]
          },
          {
            name: "Строительные блоки",
            products: [
              { id: "7", name: "Газобетонные блоки", price: 0, image: "", description: "" },
              { id: "8", name: "Керамические блоки", price: 0, image: "", description: "" },
              { id: "9", name: "Пеноблоки", price: 0, image: "", description: "" },
              { id: "10", name: "Шлакоблоки", price: 0, image: "", description: "" }
            ]
          }
        ]
      },
      {
        name: "Изоляционные материалы",
        subcategory2: [
          {
            name: "Теплоизоляция",
            products: [
              { id: "11", name: "Минеральная вата", price: 0, image: "", description: "" },
              { id: "12", name: "Пенопласт", price: 0, image: "", description: "" },
              { id: "13", name: "Пенополистирол", price: 0, image: "", description: "" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Отделочные материалы",
    subcategories: [
      {
        name: "Напольные покрытия",
        subcategory2: [
          {
            name: "Ламинат",
            products: [
              { id: "14", name: "Ламинат 32 класс", price: 0, image: "", description: "" },
              { id: "15", name: "Ламинат 33 класс", price: 0, image: "", description: "" },
              { id: "16", name: "Ламинат 34 класс", price: 0, image: "", description: "" }
            ]
          },
          {
            name: "Линолеум",
            products: [
              { id: "17", name: "Бытовой линолеум", price: 0, image: "", description: "" },
              { id: "18", name: "Полукоммерческий линолеум", price: 0, image: "", description: "" },
              { id: "19", name: "Коммерческий линолеум", price: 0, image: "", description: "" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Электрика",
    subcategories: [
      {
        name: "Кабели и провода",
        subcategory2: [
          {
            name: "Силовой кабель",
            products: [
              { id: "20", name: "ВВГнг", price: 0, image: "", description: "" },
              { id: "21", name: "NYM", price: 0, image: "", description: "" },
              { id: "22", name: "АВВГ", price: 0, image: "", description: "" }
            ]
          }
        ]
      }
    ]
  }
];

export const categories = catalogData.map((item, index) => ({
  id: (index + 1).toString(),
  name: item.category,
  icon: `/images/categories/${item.category.toLowerCase().replace(/\s+/g, '-')}.svg`,
  image: `/images/categories/${item.category.toLowerCase().replace(/\s+/g, '-')}.jpg`,
  subcategories: item.subcategories.map((sub, subIndex) => ({
    id: `${index + 1}-${subIndex + 1}`,
    name: sub.name,
    image: `/images/subcategories/${sub.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    products: sub.subcategory2.flatMap(sub2 => sub2.products)
  }))
})); 