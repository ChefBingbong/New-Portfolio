import Image from "next/image";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { images } from "@app/constants";

import style from "./Knowledge.module.scss";

const abouts = [
  {
    title: "Web3 Engineer",
    description:
      "I am a Web3 & blockchain engineer by trade. I work on smart contract protocols with EVM based blockchains on a day to day basis. I have good knowledge and experience with with cryptographic concepts, and building REST API middleware. ",
    imgUrl: images.about03,
  },
  {
    title: "Solidity Defi Developer",
    description:
      "I am a skilled smart contract developer having 3 years of experience and profound knowledge in Solidity. I have build many smart contract applications and protocols mainly around Defi and trustless Financial concepts",
    imgUrl: images.about04,
  },
  {
    title: "Frontend Developer",
    description:
      "I am a Frontend developer with a passion for developing flexible web applications. I have a strong Knowledge in HTML, React/Next.Js, Typescript, Javascript and more",
    imgUrl: images.about01,
  },
  {
    title: "Backend Developer",
    description:
      "I am a Backend developer with a passion for developing flexible backend services. I have a strong Knowledge in Nodejs, Expressjs, and AWS, PostgresSQL/Other relational DB models, and more",
    imgUrl: images.about02,
  },
];

const Knowledge = () => {
  return (
    <>
      <h2 className="head-text mt-4">
        I Know that <span>Good Architecture</span> <br />
        means <span>Good Solution</span>
      </h2>

      <div className={style["app__profiles"]}>
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "spring" }}
            className={`cursor-pointer ${style["app__profile-item"]}`}
            key={about.title}
          >
            <Image
              src={about.imgUrl}
              alt={about.title}
              className="skeleton-loading w-full"
              height={180}
            />
            <h2 className="bold-text mt-5 mb-3">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Knowledge), "about", "bg-secondary");
