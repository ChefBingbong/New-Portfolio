import { images } from "@app/constants";
import { WorkData } from "@app/types";

export const worksData: ReadonlyArray<WorkData> = [
  {
    imgUrl: images.work.btcBridge,
    projectLink: "https://github.com/ChefBingbong/BTC-bridge",
    codeLink: "https://github.com/ChefBingbong/BTC-bridge",
    title: "Native BTC to EVM bridge using HTLC's",
    description:
      "This project integrates with the Garden Finace BTC SDK aswell as my own smart wallet router SDK to allow cross chain native bitcoin swaps where users can pay bridge fees in any asset they want. Currently I do not have a deployment for this because its still and early work in progress",
    tags: ["nextjs", "typescript", "nodejs", "solidity"],
  },
  {
    imgUrl: images.work.smartWallet,
    codeLink: "https://github.com/ChefBingbong/smar-wallet-router-sdk/tree/feat%3B-bls",
    projectLink: "https://ethereum-dub-2024-frontend.vercel.app",
    title: "AA & ZK Smart Wallet Cross-Chain DEX",
    description:
      "This project is an application and SDK extends the PancakeSwap Universl and Swap routers for enbling users to execute batched transactions from an abstracted smart contract wallet contract on multiple chains. This enables users to make advanced trades on pancakeswap such as custom gas fee token trades and cross chain swaps with one signatures by leveraging ZK proofs",
    tags: ["nextjs", "typescript", "nodejs", "solidity"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/ChefBingbong/SMPC-threshold-signature-DSA/tree/main/src",
    codeLink: "https://github.com/ChefBingbong/SMPC-threshold-signature-DSA/tree/main/src",
    title: "Threshold Signature Multi-Party Digital Signatre P2P Network",
    description:
      "This project is a basic implemention a trustless secure multi-party TSS digital signature scheme for private key management over a network of P2P nodes in typescript to enable secure establishment of  a native BTC to EVM bridge. this project imnplements PBFT consensus to store proofs on a distyributed ledger.",
    tags: ["nextjs", "typescript", "nodejs", "solidity"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/ChefBingbong/kademlia-p2p-ts",
    codeLink: "https://github.com/ChefBingbong/kademlia-p2p-ts",
    title: "Kademlia DHT for P2P Peer Discovery",
    description:
      "This project is a basic implementation of the Kademlia algorithm for building robust peer-to-peer networks and distributed systems, especially for efficent and consistent peer discovery",
    tags: ["nextjs", "typescript", "nodejs"],
  },
  {
    imgUrl: images.work.pancakeswap,
    projectLink: "https://chain-abstraxtion-demo.vercel.app/",
    codeLink: "https://github.com/mcgraneder/chain-abstraxtion-demo",
    title: "Gasless Decentralised Exchange (DEX)",
    description:
      "This is a decentralised exchange i made which is a pancake swap exchange that lets users swap and trade through the pancake swap smart contracts without having to pay transaction fees or gas for trades. Next.js Node.js MongoDB Postgresql Typescript Web3-React Ethers.js Web3.js",
    tags: ["nextjs", "typescript", "nodejs"],
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
    imgUrl: images.work.parallelWallets,
    projectLink: "https://web3-crosschainwallet-demo.vercel.app/fund",
    codeLink: "https://github.com/mcgraneder/web3-crosschainwallet-demo",
    title: "Multi-chain Wallet System Package Demo",
    description:
      "Web3 wallet NPM Package Concept sandbox that allows users to connect to multiple wallets on different chains simultaneously in order to submit multiple paralle txs. This allows app users to abstract the need to show users what chain they're on. React.js Typescript, Ren.js Node.js",
    tags: ["nextjs", "reactjs", "typescript"],
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
    imgUrl: images.work.backendCode,
    projectLink: "https://github.com/mcgraneder/AstralBridge-solV1/tree/master/contracts",
    codeLink: "https://github.com/mcgraneder/AstralBridge-solV1/tree/master/contracts",
    title: "Astral Bridge Contracts v1",
    description:
      "this project hosts the complete bridge contracts i designed in solidity for my latest cross chain bridge AMM project. the bridge factory is deployed on 9 EVM chains and communications between chains is enabled through a backend signature verifier API",
    tags: ["nextjs", "reactjs", "typescript"],
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
