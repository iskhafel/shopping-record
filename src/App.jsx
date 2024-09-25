import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

export default function App() {
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
  ];

  return (
    <div className="app">
      <Header />
      <Form />
      <GroceryList data={data} />
      <Footer />
    </div>
  );
}
