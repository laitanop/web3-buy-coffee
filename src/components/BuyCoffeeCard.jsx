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
      <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-2xl shadow-xl p-8 border border-amber-200 flex items-center justify-center min-h-[400px] relative overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl animate-pulse delay-75"></div>
        </div>

        <div className="text-center relative z-10">
          {/* Coffee cup with steam animation */}
          <div className="relative mb-6">
            <div className="relative inline-block">
              {/* Steam animation */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-1 h-8 bg-gradient-to-t from-amber-400/60 to-transparent rounded-full animate-pulse"></div>
                <div className="w-1 h-10 bg-gradient-to-t from-amber-500/60 to-transparent rounded-full animate-pulse delay-150"></div>
                <div className="w-1 h-8 bg-gradient-to-t from-amber-400/60 to-transparent rounded-full animate-pulse delay-300"></div>
              </div>

              {/* Coffee icon with animation */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-full shadow-lg animate-bounce">
                <Coffee className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Loading text */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-pulse">
            {isPending ? "Opening Wallet..." : "Brewing Your Coffee..."}
          </h3>
          <p className="text-gray-600 mb-6">
            {isPending
              ? "Please approve the transaction in your wallet"
              : "Confirming your generous support on the blockchain"}
          </p>

          {/* Progress dots */}
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-200"></div>
          </div>
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
