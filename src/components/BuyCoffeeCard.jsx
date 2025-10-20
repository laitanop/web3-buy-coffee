import React, { useState } from "react";
import { Coffee, Send } from "lucide-react";

const BuyCoffeeCard = ({ onBuyCoffee }) => {
  const [coffeeCount, setCoffeeCount] = useState(1);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const coffeePrice = 0.001; // ETH per coffee (example price)
  const totalPrice = (coffeeCount * coffeePrice).toFixed(4);

  const coffeeOptions = [1, 3, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuyCoffee({
      coffeeCount,
      name,
      message,
      totalPrice,
    });

    // Reset form
    setName("");
    setMessage("");
    setCoffeeCount(1);

    // Show success message (you can make this more elegant)
    alert("Thank you for your support! 🎉\n(Web3 integration coming soon)");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Coffee className="w-6 h-6 text-secondary" />
        Buy Me a Coffee
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Coffee Amount Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Number of Coffees
          </label>
          <div className="grid grid-cols-3 gap-3">
            {coffeeOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCoffeeCount(option)}
                className={`py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  coffeeCount === option
                    ? "bg-secondary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="text-2xl mb-1">
                  {Array(option).fill("☕").join("")}
                </div>
                <div className="text-sm">x{option}</div>
              </button>
            ))}
          </div>

          {/* Custom Amount Slider */}
          <div className="mt-4">
            <input
              type="range"
              min="1"
              max="10"
              value={coffeeCount}
              onChange={(e) => setCoffeeCount(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="text-center mt-2 text-sm text-gray-600">
              Custom: {coffeeCount} {coffeeCount === 1 ? "coffee" : "coffees"}
            </div>
          </div>
        </div>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Your Name (optional)
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name or wallet name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Say something nice... (optional)"
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
          />
        </div>

        {/* Price Display */}
        <div className="bg-amber-50 rounded-xl p-4 border-2 border-primary">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold">Total Amount:</span>
            <span className="text-2xl font-bold text-secondary">
              {totalPrice} ETH
            </span>
          </div>
          <div className="text-xs text-gray-600 text-right mt-1">
            ≈ ${(totalPrice * 2000).toFixed(2)} USD
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-secondary to-amber-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
        >
          <Send className="w-5 h-5" />
          Support with {coffeeCount} {coffeeCount === 1 ? "Coffee" : "Coffees"}
        </button>
      </form>
    </div>
  );
};

export default BuyCoffeeCard;
