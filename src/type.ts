import burger from "./assets/burger.jpg";
import coffee from "./assets/coffee.avif";
import fries from "./assets/fries.jpg";
import juice from "./assets/juice.avif";
import shawarma from "./assets/shawarma.jpg";
import tea from "./assets/tea.jpeg";
export interface ItemInfo {
  img: string;
  name: string;
  amount: number;
  price: number;
}

export const ITEMS: ItemInfo[] = [
  { name: "Burger", price: 300, img: burger, amount: 0 },
  { name: "Coffee", price: 250, img: coffee, amount: 0 },
  { name: "Fries", price: 150, img: fries, amount: 0 },
  { name: "Juice", price: 180, img: juice, amount: 0 },
  { name: "Shawarma", price: 280, img: shawarma, amount: 0 },
  { name: "Tea", price: 100, img: tea, amount: 0 },
];
