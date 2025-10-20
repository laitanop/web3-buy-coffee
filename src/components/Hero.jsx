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
        Support My Work
      </h2>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
        If you enjoy my content and want to support my work in Web3 development,
        you can buy me a coffee! Every coffee helps me keep creating awesome
        projects.
      </p>

      <div className="flex justify-center items-center gap-2 text-gray-700">
        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        <span className="text-lg font-medium">Powered by Web3</span>
      </div>
    </div>
  );
};

export default Hero;
