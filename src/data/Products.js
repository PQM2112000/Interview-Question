export const Products = {
  products: [
    {
      id: 1,
      name: "Royal Milk Tea",
      price: 4.8,
      toppings: "Milk foam,white pearl",
    },
    {
      id: 2,
      name: "Green Milk Tea",
      price: 4.6,
      toppings: "pearl",
    },
    {
      id: 3,
      name: "Oolong Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 4,
      name: "Blueberry Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 5,
      name: "Mango Milk Tea",
      price: 5.1,
      toppings: "Aloe, Pearl",
    },
  ],
};
export const Prodts = Products.products;

export const Prod = {
  products: [
    {
      id: 1,
      name: "Royal Milk Tea",
      price: 4.8,
      toppings: "Milk foam,white pearl",
    },
    {
      id: 2,
      name: "Green Milk Tea",
      price: 4.6,
      toppings: "pearl",
    },
    {
      id: 3,
      name: "Oolong Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 4,
      name: "Blueberry Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 5,
      name: "Mango Milk Tea",
      price: 5.1,
      toppings: "Aloe, Pearl",
    },
  ],
};
export const Prod2 = {
  products: [
    {
      id: 1,
      name: "Royal Milk Tea",
      price: 4.8,
      toppings: "Milk foam,white pearl",
    },
    {
      id: 2,
      name: "Green Milk Tea",
      price: 4.6,
      toppings: "pearl",
    },
    {
      id: 3,
      name: "Oolong Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 4,
      name: "Blueberry Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 5,
      name: "Mango Milk Tea",
      price: 5.1,
      toppings: "Aloe, Pearl",
    },
  ],
};
export const Prod3 = {
  products: [
    {
      id: 1,
      name: "Royal Milk Tea",
      price: 4.8,
      toppings: "Milk foam,white pearl",
    },
    {
      id: 2,
      name: "Green Milk Tea",
      price: 4.6,
      toppings: "pearl",
    },
    {
      id: 3,
      name: "Oolong Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 4,
      name: "Blueberry Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 5,
      name: "Mango Milk Tea",
      price: 5.1,
      toppings: "Aloe, Pearl",
    },
  ],
};
export const Prod4 = {
  products: [
    {
      id: 1,
      name: "Royal Milk Tea",
      price: 4.8,
      toppings: "Milk foam,white pearl",
    },
    {
      id: 2,
      name: "Green Milk Tea",
      price: 4.6,
      toppings: "pearl",
    },
    {
      id: 3,
      name: "Oolong Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 4,
      name: "Blueberry Milk Tea",
      price: 5.1,
      toppings: "Pearl, milk foam",
    },
    {
      id: 5,
      name: "Mango Milk Tea",
      price: 5.1,
      toppings: "Aloe, Pearl",
    },
  ],
};
export const AscName = Prod.products.sort((a, b) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
);
export const DscName = Prod2.products.sort((a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
});
export const AscPrice = Prod3.products.sort((a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
});
export const DscPrice = Prod4.products.sort((a, b) => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
});
/* console.log(AscName);
console.log(DscName);
console.log(AscPrice);
console.log(DscPrice); */

