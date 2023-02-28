import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useCycle } from "framer-motion";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { HiX } from "@react-icons/all-files/hi/HiX";

import { motion } from "framer-motion";

import { images, navLinks } from "@app/constants";
import { useClickOutside } from "@app/hooks";

import style from "./Navbar.module.scss";
import { getHeaderLink, throttle } from "@app/utils";
import useMediaQuery from "@app/hooks/useMediaQuery";

import Menu from "./Menu";
import { useRouter } from "next/router";
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane';
import { BiLoaderCircle } from '@react-icons/all-files/bi/BiLoaderCircle';

const navbarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0.7,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [currentActiveLink, setCurrentActiveLink] = useState("");
  const [navbarOpen, toggleNavbarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileNavBarOpened = useRef(false);
  const router = useRouter();

  const isMobileView = useMediaQuery("(max-width: 1060px)");

  useEffect(() => {
    const handleScroll = throttle(() => {
      const element = navbarRef.current;
      if (!element) return;

      const className = style["app__navbar--shadow"];
      const hasShadowClassName = element.classList.contains(className);

      if (window.scrollY > 50) {
        !hasShadowClassName && element.classList.add(className);
      } else {
        hasShadowClassName && element.classList.remove(className);
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const { hash } = window.location;
    setCurrentActiveLink(hash ? hash.slice(1) : router.pathname.slice(1) || navLinks[0][0]);
  }, [router.asPath, router.pathname]);

  useEffect(() => {
    mobileNavBarOpened.current = isOpen;
    if (isOpen) {
      return toggleNavbarOpen(isOpen);
    }

    const timer = setTimeout(() => {
      toggleNavbarOpen(isOpen);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  useClickOutside(menuRef, () => {
    if (mobileNavBarOpened.current) toggleOpen();
  });

  return (
    <nav ref={navbarRef} className={style["app__navbar"]}>
      <div className={style["app__navbar-logo"]}>
        <Link href="/" className="flex h-10 w-64">
          <div className="text-3xl font-bold flex items-center justify-center">
            Evan <span className="text-primary">{` McGrane`}</span>
          </div>
          {/* <div className={`text-4xl font-bold ${style["logo-font"]} cursor-pointer`}>
            <span className="text-black">PAALA</span>
            <span className="pl-2 text-primary">MUGAN</span>
          </div> */}
        </Link>
      </div>
      <ul className={style["app__navbar-links"]}>
        {navLinks.map(([key, value]) => (
          <li
            className={`app__flex p-text ${currentActiveLink === key ? style["active"] : ""}`}
            key={`link-${key}`}
          >
            <div />
            <Link href={getHeaderLink(key)} onClick={() => setCurrentActiveLink(key)}>
              {value}
            </Link>
          </li>
        ))}
      </ul>
      {isMobileView && (
        <motion.div
          ref={menuRef}
          className={style["app__navbar-menu"]}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <HiMenu
            onClick={() => {
              toggleOpen();
            }}
          />

          <motion.div
            className={`${navbarOpen ? "visible" : "invisible"}`}
            variants={navbarVariants}
          >
            <HiX onClick={() => toggleOpen()} />
            <Menu toggleOpen={toggleOpen} />
          </motion.div>
        </motion.div>
      )}
      <div className="flex justify-center sm:justify-start">
        <Link href={"/#contact"}
          className="inline-flex items-center px-5 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary/95"
           onClick={() => setCurrentActiveLink("contact")} 
        >
          <FaPaperPlane className="mr-2" />
          <span>Contact Me</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
