import { AppWrap, MotionWrap } from "@app/wrapper";

import useIntersectionObserver from "@app/hooks/useIntersectionObserver";

import LottieAnimation from "./LottieAnimation";
import style from "./About.module.scss";
import { fadeIn } from "../Skills/Skills";

import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant

const About = () => {
  const [isIntersecting, ref] = useIntersectionObserver();

  const [ref1, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <h2 className="head-text mt-4">
        About <span>Me</span>
      </h2>
      <div className={`w-full ${style["app__about-container"]} 2xl:w-4/5`} ref={ref1}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 ml-12"
          >
            <h3 className="text-2xl text-primary mb-4 font-semibold">
              Fullstack Web3 Developer with a passion for learning.
            </h3>
            <p className="mb-6 text-[18px]">
              Full stack software engineer at PancakeSwap, working Frontend aswell as Backend
              services and SDKs.
              <br></br>
              <br></br>
              Bachelors of Applied Physics from Dublin City University, finishing 2nd in my class
              with a with first degree honours.
              <br></br>
              <br></br>
              Focussing on distributed systems and peer to peer networks and studying public key
              cryptography, mainly around how secure multi-party computation (SMPC) can be applied
              in zero-knowledge crypto bridges.
              <br></br>
              <br></br>
              Experienced web3 Engineer, with extensive knowledgeable in researching, designing,
              developing and testing blockchain and web3 technologies which include experience with
              Solidity, Geth, Typescript, Golang, Next.js, and more.
              <br></br>
              <br></br>Passionate about Web3 and blockchain core infrastructure. I have a lot of
              experiencing devloping full stack web3 applications mainly in areas of Defi such as
              decentralized trading, lending and cryptocurrency bridging
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-primary mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-[17px] tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-primary mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-[17px] tracking-[2px]">
                  Side Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-primary mb-2">
                  {inView ? <CountUp start={0} end={10000} duration={3} /> : null}+
                </div>
                <div className="font-primary text-[17px] tracking-[2px]">
                  of Hours
                  <br />
                  Spent Coding
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex" ref={ref}>
            {isIntersecting && <LottieAnimation />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About), "about", "bg-white");
