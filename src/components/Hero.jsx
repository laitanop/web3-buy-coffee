import React from "react";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center py-12">
      <div className="inline-block mb-4">
        <div className="w-32 h-32 bg-gradient-to-br from-secondary to-amber-700 rounded-full flex items-center justify-center shadow-xl">
          <span className="text-6xl">☕</span>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Web3 Coffee Support Demo
      </h2>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
        A decentralized application showcasing blockchain integration for
        digital tipping. This portfolio project demonstrates smart contract
        interaction, wallet connectivity, and real-time transaction handling on
        Ethereum.
      </p>

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-gray-700">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="text-lg font-medium">Powered by Web3</span>
        </div>
        <div className="px-4 py-2 bg-blue-100 border border-blue-300 rounded-lg">
          <span className="text-sm font-medium text-blue-800">
            🔗 Running on Sepolia ETH Test Network
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
