import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { programmingLanguages } from "@app/constants";
import { WorkData } from "@app/types";
import { worksData as works, workTabs } from "./data";

import style from "./Work.module.scss";
import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";
import ReactPlayer from "react-player";



type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[]
}
  const projects: Project[] = [
    {
      title: "Upcoming Vide Tutorials",
      description:
        "In this video i go over some side projects that i have worked on that i plan to make full walkthroughs on.",
      link: "https://www.youtube.com/watch?v=4sHGNv_QrfI&t=65s",
      tags: []
    },
    {
      title: "Multisig Wallet Part 1",
      description:
        "In this video i begin a full walkthrough on creating a full stack web3 dapp. A multisig wallet smart contract linked up to a responsive frontent in Javsacript",
      link: "https://www.youtube.com/watch?v=YP1nc3Sel6c&t=673s",
      tags: []
    },
    {
      title: "Multisig Wallet Part 2",
      description:
        "In this video we start the develoment of the multisig smart contact and create the consensus model which requires agreement between signatories in order to execute transfers.",
      link: "https://www.youtube.com/watch?v=F5ykfssiRVw&t=1776s",
      tags: []
    },
  ];

const renderWorkItem = (work: any) => {
  return (
    <div key={work.title} className={`${style["app__work-portfolio-item"]}`}>
      <div className={`${style["app__work-portfolio-img"]}`}>
        <ReactPlayer url={work.link} height={230} width={337}/>

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
          className={`${style["app__work-portfolio-hover"]} app__flex`}
        >
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${work.title} Demo`}
          >
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className={style["app__work-portfolio-content"]}>
        <div className="flex items-center text-lg bold-text mt-4 leading-normal break-words">
          <div className="flex-1 mr-1 overflow-hidden text-ellipsis break-words" title={work.title}>
            {work.title}
          </div>
        </div>
        <p className="mt-3 mb-4 text-base text-center p-text">{work.description}</p>
        <div className="flex items-center mt-auto">
          <a
            href={work.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${work.title} Demo Website`}
            className="text-blue-600 text-sm hover:underline"
          >
            View Link
          </a>
        </div>
      </div>
    </div>
  );
};

const Youtube = () => {
  return (
    <>
      <h2 className="head-text mt-4">
        See My Recent <span>Youtube Videos</span>
      </h2>

      <TabFilterContainer items={projects} >
        {(item) => renderWorkItem(item)}
      </TabFilterContainer>
    </>
  );
};

export default AppWrap(MotionWrap(Youtube), "youtube", "bg-gray-200");
