# ☕ Buy Me a Coffee - Web3 Edition

A beautiful and modern React UI for a "Buy Me a Coffee" application, ready for Web3 integration. This project showcases a complete user interface that will be connected to blockchain functionality (Ethereum smart contracts) for accepting cryptocurrency donations.

## 🎨 Features

- **Modern & Responsive Design**: Beautiful UI built with React and Tailwind CSS
- **Coffee Amount Selection**: Users can choose preset amounts or use a custom slider
- **Personal Messages**: Supporters can leave their name and a message
- **Recent Supporters Display**: Shows a list of recent supporters with their contributions
- **Web3 Ready**: UI prepared for wallet connection and blockchain integration
- **Smooth Animations**: Engaging hover effects and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd web3-buy-coffee
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📂 Project Structure

```
web3-buy-coffee/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with Connect Wallet button
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── BuyCoffeeCard.jsx   # Main coffee purchase form
│   │   ├── RecentSupporters.jsx # Display recent supporters
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔮 Next Steps - Web3 Integration

This UI is ready for blockchain integration. Here's what you'll need to add:

### 1. **Wallet Connection**

- Integrate Web3.js or ethers.js
- Connect to MetaMask or other Web3 wallets
- Display connected wallet address

### 2. **Smart Contract Integration**

- Deploy a smart contract for receiving donations
- Integrate contract calls for sending ETH/tokens
- Store supporter messages on-chain or IPFS

### 3. **Blockchain Network Support**

- Support for Ethereum mainnet/testnets
- Option for Layer 2 solutions (Polygon, Arbitrum, etc.)
- Gas fee estimation

### 4. **Transaction Handling**

- Transaction status tracking
- Success/failure notifications
- Transaction history

### Suggested Libraries for Web3 Integration:

```bash
npm install ethers wagmi viem @rainbow-me/rainbowkit
```

## 🎨 Customization

### Colors

Edit the Tailwind config (`tailwind.config.js`) to change the color scheme:

```javascript
colors: {
  primary: '#FFDD00',    // Yellow
  secondary: '#6F4E37',  // Brown
}
```

### Content

Update the hero section in `src/components/Hero.jsx` to personalize your message.

### Coffee Price

Modify the `coffeePrice` variable in `src/components/BuyCoffeeCard.jsx` to set your preferred price per coffee.

## 📝 License

This project is open source and available for portfolio use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

Happy coding! ☕💻
