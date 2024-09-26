import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
  {
    id: 4,
    name: "Kopi Hitam",
    quantity: 1,
    checked: true,
  },
];

export default function App() {
  const [items, setItems] = useState(data);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} />
      <Footer />
    </div>
  );
}
