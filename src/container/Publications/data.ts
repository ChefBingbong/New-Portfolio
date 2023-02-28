import { images } from "@app/constants";
import { WorkData } from "@app/types";

export const worksData: ReadonlyArray<WorkData & {
  downloadLink: string
}> = [
  {
    imgUrl: images.publications.surveyOfCrypto,
    projectLink: "https://astral-bridge.onrender.com/home",
    codeLink: "https://github.com/mcgraneder/Astral-Bridge",
    title: "Survey of the adoption of Blockchain in Academia",
    description:
      "Litreature review that discusses and analyses the potential of a distributed blockchain model being adopted to remodel different frameworks in Academia such as Peer-review",
    tags: ["noncryptoBlockchainUsecases", "typescript", "nodejs"],
    downloadLink: "paper2.pdf"
  },
  {
    imgUrl: images.publications.decentralisedPeerReview,
    projectLink: "https://catalog-explorer.onrender.com/explorerHome",
    codeLink: "https://github.com/mcgraneder/blockchain_explorer",
    title: "Blockchain Model to re-invent the Peer-review system",
    description:
      "This paper propses an Proof Of Stake (POS) distributed model that uses game theory and crypto incentive tactics to create a decentraised peer review model that distributes wealth and reputation amoungst the community",
    tags: ["noncryptoBlockchainUsecases", "typescript"],
    downloadLink: "paper1.pdf"
  },
  {
    imgUrl: images.publications.defiMath,
    projectLink: "https://nextjs-web-oauth.vercel.app",
    codeLink: "",
    title: "Exploring Financial algorithms for Flash loan Arbitrage",
    description:
      "Paper exploring the mathematics behind concepts in Defi such as Automated market makers (CPAMM's) aswell as efficent algorithms for executing flash loan arbitrage",
    tags: ["financial", "typescript"],
    downloadLink: "Defi-Bot-Financial-Theory-&-Design-Philosopy.pdf"
  },
];

export const workTabs = [
  {
    id: "all",
  name: "All",
  },
  {
    id: "financial",
    name: "Financial Algorithms",
  },
  {
    id: "noncryptoBlockchainUsecases",
    name: "Non-crypto Blockchain Usecases",
  },
] as const;
