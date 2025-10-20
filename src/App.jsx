import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BuyCoffeeCard from "./components/BuyCoffeeCard";
import RecentSupporters from "./components/RecentSupporters";
import Footer from "./components/Footer";

function App() {
  const [supporters, setSupporters] = useState([
    {
      id: 1,
      name: "Alice.eth",
      message: "Love your work! Keep it up! ☕",
      amount: 3,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "Bob.eth",
      message: "Amazing project!",
      amount: 5,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      name: "Charlie.eth",
      message: "Thanks for sharing your knowledge 🙏",
      amount: 1,
      timestamp: "1 day ago",
    },
  ]);

  const handleBuyCoffee = (coffeeData) => {
    // This will be replaced with Web3 logic later
    const newSupporter = {
      id: supporters.length + 1,
      name: coffeeData.name || "Anonymous",
      message: coffeeData.message,
      amount: coffeeData.coffeeCount,
      timestamp: "Just now",
    };
    setSupporters([newSupporter, ...supporters]);
    console.log("Coffee purchase:", coffeeData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Hero />
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <BuyCoffeeCard onBuyCoffee={handleBuyCoffee} />
          <RecentSupporters supporters={supporters} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
