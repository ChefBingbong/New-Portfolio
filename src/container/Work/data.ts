import { images } from "@app/constants";
import { WorkData } from "@app/types";

export const worksData: ReadonlyArray<WorkData> = [
  {
    imgUrl: images.work.cryptoExploer,
    projectLink: "https://blockchain-explorer-theta.vercel.app/en/explorerHome",
    codeLink: "https://github.com/mcgraneder/blockchain_explorer",
    title: "Blockchain exploer & indexer",
    description:
      "Full stack Etherscan like blockchain explorer for Ren L1 blockchain. Users can query blocks, transactions, ENS addresses and more. Features a bytecode decoder to extract error logs, event logs and smart contract input data info. React.js, Typescript, Node.js",
    tags: ["nextjs", "typescript"],
  },
  {
    imgUrl: images.work.astralBridge1,
    projectLink: "https://astral-bridge.vercel.app/home",
    codeLink: "https://github.com/mcgraneder/Astral-Bridge",
    title: "Cross-chain Crypto Bridge/Dex",
    description:
      "Full cross chain cryptocurrency bridge that supports 9 EVM chains. Users can bridge synthetic assets and swap on desired chains. Next.js Node.js MongoDB Postgresql Typescript Web3-React Ethers.js Web3.js Ren.js Prisma tRPC, ZOD Render",
    tags: ["nextjs", "typescript", "nodejs"],
  },
  {
    imgUrl: images.work.nextjsWebOAuth,
    projectLink: "https://nextjs-web-oauth.vercel.app",
    codeLink: "",
    title: "Web OAuth",
    description:
      "Web OAuth Project developed using Next.js, NextAuth, Chakra UI, React, Redux, Redux Toolkit, TypeScript, Google OAuth, and more.",
    tags: ["nextjs", "typescript"],
  },
  {
    imgUrl: images.work.cryptocurrencyBitcoin,
    projectLink: "https://cryptocurrency-bitcoin.netlify.app",
    codeLink: "https://github.com/mcgraneder?tab=repositories",
    title: "Crypto Bitcoin Price Chart",
    description:
      "Cryptocurrency Bitcoin Price Chart was developed using React, Typescript, coingecko-api, react-chartjs-2, chart.js and tailwindcss.",
    tags: ["reactjs", "typescript", "tailwindcss"],
  },
  {
    imgUrl: images.work.parallelWallets,
    projectLink: "https://github.com/mcgraneder/parrellel-wallets",
    codeLink: "https://github.com/mcgraneder/parrellel-wallets",
    title: "Multi-chain Wallet System Package Demo",
    description:
      "Web3 wallet NPM Package Concept sandbox that allows users to connect to multiple wallets on different chains simultaneously in order to submit multiple paralle txs. This allows app users to abstract the need to show users what chain they're on. React.js Typescript, Ren.js Node.js",
    tags: ["nextjs", "reactjs", "typescript"],
  },
  {
    imgUrl: images.work.web3login,
    projectLink: "https://main--legendary-pithivier-efc9ea.netlify.app/",
    codeLink: "https://github.com/mcgraneder/Celestium-DEX-InterfaceV1",
    title: "Web3 ECDSA Cryptographic Login System",
    description:
      "Web3 eliptic curve digital signature & email based login system Concept using ENS verification and Mongo DB database",
    tags: ["Nodejs", "reactjs", "typescript, nodejs"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink:
      "https://github.com/mcgraneder/Defi-Trading-Arbitrage-Bot/blob/main/Defi-Bot-Financial-Theory-%26-Design-Proposal.pdf",
    codeLink: "https://github.com/mcgraneder/Defi-Trading-Arbitrage-Bot",
    title: "Advanced Defi Arbitrage Bot",
    description:
      "Custom build Arb bot with Node.js/Solididty which can arbiyrage DAI/WETH across Uniswap/Suishiswap and 2 other exchanges using flashloans",
    tags: ["nodejs", "typescript"],
  },
  {
    imgUrl: images.work.translatorApplication,
    projectLink: "https://translator-application.vercel.app",
    codeLink: "",
    title: "Translator Application",
    description:
      "It helps to translate from one language to multiple languages. It is developed using svelte, typescript, nodejs and more.",
    tags: ["nodejs", "svelte", "typescript"],
  },
  {
    imgUrl: images.work.portfolioWebsite,
    projectLink: "",
    codeLink: "",
    title: "Portfolio Website",
    description:
      "Portfolio Website developed for Full Stack Software Engineer with full responsiveness using Nextjs, Tailwindcss, SCSS, Typescript and more.",
    tags: ["nextjs", "reactjs", "tailwindcss", "typescript"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/mcgraneder/astral-sol",
    codeLink: "https://github.com/mcgraneder/astral-sol",
    title: "Crosschain AMM Contracts",
    description:
      "Solidity smart contracts for the Cross chain DEX i am currently working on. I use Renjs for bridging and intrface with the uniswap V3 contracts to preform swaps",
    tags: ["solidity", "nodejs"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/mcgraneder/MoralisChallenges/tree/main/MORALIS",
    codeLink: "https://github.com/mcgraneder/MoralisChallenges/tree/main/MORALIS",
    title: "Gambling Contracts",
    description:
      "Solidity smart contracts for a gambling service that allows users to stake crypto assets in order to double their money. I use chainlink keepers and VRF for on chain randomness. In order to pay the chainlink fee i take a subsidy from the users bet to swap for LINK on uniswap to cover the fee",
    tags: ["solidity", "nodejs"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/mcgraneder/SimpleDecentralisedExchange",
    codeLink: "https://github.com/mcgraneder/SimpleDecentralisedExchange",
    title: "Limit Order DEX",
    description:
      "Solidity smart contracts for a limit order, orderbook style dex that matches users orders in two queuses (a buy and sell queue). I use bubble sort to dynamicall order trades by price so the top trades always match each other",
    tags: ["solidity", "nodejs"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/mcgraneder/Etherem-MultiSigWallet-Dapp",
    codeLink: "https://github.com/mcgraneder/Etherem-MultiSigWallet-Dapp",
    title: "Multi-signature Wallet",
    description:
      "Solidity smart contracts for a multi sig wallet that allows users to create instances of a consensus based wallet. users can transfer native and ERC20 assets. In order for transfers to execute a majority consensus of agreement must be reached between all wallet owners",
    tags: ["solidity", "nodejs"],
  },
];

export const workTabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "nodejs",
    name: "Nodejs",
  },
  {
    id: "nextjs",
    name: "Nextjs",
  },
  {
    id: "reactjs",
    name: "React",
  },
  {
    id: "solidity",
    name: "Solidity",
  },
] as const;
