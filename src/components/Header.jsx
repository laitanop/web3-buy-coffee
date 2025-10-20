import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Coffee, Wallet } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-secondary" />
            <h1 className="text-2xl font-bold text-secondary">
              Buy Me a Coffee
            </h1>
          </div>

          {/* <button className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg">
            <Wallet className="w-5 h-5" />
            <span className="font-semibold">Connect Wallet</span>
            
          </button> */}
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
