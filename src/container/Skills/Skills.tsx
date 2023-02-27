import type { FunctionComponent } from "react";
import dynamic from "next/dynamic";

import { AppWrap, MotionWrap } from "@app/wrapper";

import { experiences, skills } from "./data";
import { WorkElement } from "./WorkElement";
import style from "./Skills.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { programmingLanguages } from "@app/constants";

export const fadeIn = (direction: string, delay: number | undefined) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const services: any = [
  {
    name: "TypeScript",
    skill: "typescript",
    description:
      "My main language is Typescript. I have been using typescript for 2 years now and and well versed in designing & implementing robust typesafe applications",
    link: "Learn more",
  },
  {
    name: "React/Next.js",
    skill: "nextjs",

    description:
      "My main Frontend stack includes Next/React.js. I am skilled in creating preformant pixel perfect and responsive User interfaces with elegnat UI/UX",
    link: "Learn more",
  },
  {
    name: "Node.js",
    skill: "nodejs",

    description:
      "Node.js with typescript is my primary backend language. I have expereince creating fast API services and backend architecture aswell as NPM packages using Node",
    link: "Learn more",
  },
  {
    name: "Solidity",
    skill: "typescript",

    description:
      "I am a skilled smart contract engineer and have a profound understanding of the EVM. Skilled in smart contract acces control, proxies, upgrades and ECDSA security patterns",
    link: "Learn more",
  },
];

const Skill = dynamic(() => import("./Skill" /* webpackChunkName: "Skill" */), {
  ssr: false,
});

const Skills: FunctionComponent = () => {
  return (
    <>
      <h2 className="head-text mt-4">Skills & Experiences</h2>

      <div className={style["app__skills-container"]}>
        <div className={style["app__skills-list"]}>
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
        <div className={style["app__skills-exp"]}>
          {experiences.map((experience) => (
            <div className={style["app__skills-exp-item"]} key={experience.year}>
              <div className={style["app__skills-exp-year"]}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className={style["app__skills-exp-works"]}>
                {experience.works.map((work) => (
                  <WorkElement key={work.name} {...work} />
                ))}
              </div>
            </div>
          ))}

            {/* service list */}
            <div className="mt-8">
              {services.map((service: any, index: number) => {
                // destructure service
                const { name, description, link, skill } = service;
                  const { icon, bgColor, url } = programmingLanguages[skill];
                return (
                  <div className="border-b border-white/20 h-[146px] mb-2 mt-3 flex" key={name}>
                    <div className="max-w-[476px]">
                      <div className="flex justify-between">
                        <h4 className="text-[18px] tracking-wider font-primary font-semibold mb-2 text-primary">
                          {name}
                        </h4>
                        <div
                          className="app__flex rounded-full p-2"
                          style={{
                            backgroundColor: bgColor,
                          }}
                        >
                          <Image
                            src={icon}
                            alt={`icon-${name}`}
                           
                            sizes="100vw"
                            width={25}
                            height={25}
                          />
                        </div>
                      </div>

                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
     
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills), "skills", "bg-white");
