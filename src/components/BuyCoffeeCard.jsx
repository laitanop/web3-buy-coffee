import React, { useState, useEffect } from "react";
import { Coffee, Send } from "lucide-react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { coffeeContractAddress, coffeeContractABI } from "../constanstAbi";

const BuyCoffeeCard = () => {
  const { writeContractAsync, isPending, data: hash } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  const [ethereumPrice, setEthereumPrice] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const coffeePriceInEther = 0.001; // ETH per coffee (example price)
  const totalPrice = coffeePriceInEther.toFixed(4);

  const getEthereumPrice = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    const ethereumPrice = data.ethereum.usd;

    setEthereumPrice(ethereumPrice);
  };

  useEffect(() => {
    getEthereumPrice();
  }, []);
  const convertToWei = () => {
    return (coffeePriceInEther * 10 ** 18).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const txHash = await writeContractAsync({
        address: coffeeContractAddress,
        abi: coffeeContractABI,
        functionName: "buyCoffee",
        args: [name, message],
        value: convertToWei(),
      });
    } catch (error) {
      alert(`Transaction failed: ${error.message}`);
    }
  };

  // Show success message when transaction is confirmed
  useEffect(() => {
    if (isConfirmed) {
      alert("Thank you for your support! 🎉");
      setName("");
      setMessage("");
    }
  }, [isConfirmed]);

  if (isPending || isConfirming) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
          <p className="text-gray-700 font-semibold">
            {isPending
              ? "Waiting for wallet approval..."
              : "Confirming transaction..."}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Coffee className="w-6 h-6 text-secondary" />
        Buy Me a Coffee
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            ≈ ${(coffeePriceInEther * ethereumPrice).toFixed(2)} USD
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-secondary to-amber-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
        >
          <Send className="w-5 h-5" />
          Support with 1 Coffee
        </button>
      </form>
    </div>
  );
};

export default BuyCoffeeCard;
