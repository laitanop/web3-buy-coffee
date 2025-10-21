import React from "react";
import { Github, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            <p>Built with ❤️ for Web3 Community</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="https://sepolia.etherscan.io/address/0xaab0d6bea10bdd3dedbd3e645ffe945b86f04da2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-secondary transition-colors duration-200 flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>View Smart Contract on Etherscan</span>
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/laitanop/web3-buy-coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
