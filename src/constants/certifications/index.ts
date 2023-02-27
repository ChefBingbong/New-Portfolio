import hackerRankCertifications from "./hackerRank";
import freeCodeCampCertifications from "./freeCodeCamp";
import googleCloudCertifications from "./googleCloud";
import generalCertifications from "./general";
import moralisCertifications from "./moralis"

export const certifications = [
    ...moralisCertifications,
  ...hackerRankCertifications,
  ...freeCodeCampCertifications,
];

export const certificationTabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "moralis",
    name: "Moralis",
  },
  {
    id: "hackerRank",
    name: "HackerRank",
  },
  {
    id: "freeCodeCamp",
    name: "FreeCodeCamp",
  },
] as const;
