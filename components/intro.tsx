"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/hooks/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FlipWords } from "./ui/flip-words";
import ShimmerButton from "./ui/shimmer-button";
import WordRotate from "./ui/word-rotate";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.75);
  const { setActiveSection, setTimeofLastClick } = useActiveSectionContext();

  function handleContact() {
    window.location.href = "#contact";
  }

  function handleDownload() {
    window.open("/DeependraSinghResume.pdf", "_blank");
  }
  function handleGithub() {
    window.open("https://github.com/trdxDeepu", "_blank");
  }
  function handleLinkedin() {
    window.open("https://www.linkedin.com/in/deependrasingh/", "_blank");
  }

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/1650879848538.png"
              alt="DeependraSingh"
              width="120"
              height="80"
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem]
                border-white object-cover shadow-xl "
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 !leading-[1.5] px-4 mt-4 text-xl 
      font-medium sm:text-2xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {" "}
        <TypewriterEffect
          words={[
            { text: "Hello" },
            { text: "I" },
            { text: "am" },
            { text: "Deependra" },
            { text: "Singh" },
          ]}
          className="text-lg mb-10"
        ></TypewriterEffect>
        {/* <span className="font-bold">, I&apos;m Deependra Singh</span> */}
        I&apos;m a
        <span className="font-bold">
          <WordRotate
            words={["FrontEnd Developer", "Web Developer", "React Developer"]}
          ></WordRotate>
        </span>
        with skill of
        <span className="italic font-bold underline ">
          {" "}
          <FlipWords
            words={[
              "React",
              "Next.js",
              "TailwindCSS",
              "TypeScript",
              "JavaScript",
            ]}
          ></FlipWords>
        </span>
        and currently learning{" "}
        <span className="italic font-bold underline">
          (BackEnd Development )
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "keyframes",
          duration: 0.4,
          ease: "backInOut",
        }}
      >
        <ShimmerButton onClick={handleContact}>
          <Link
            href="#contact"
            // className="flex items-center justify-between gap-3 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
            className="text-white flex items-center justify-between gap-3 dark:text-white/60 "
          >
            Contact me here{" "}
            <BsArrowRight className="transition opacity-70 group-hover:translate-x-1 " />{" "}
          </Link>
        </ShimmerButton>

        <ShimmerButton background="" onClick={handleDownload}>
          <a
            className="flex items-center gap-2    dark:text-white/60"
            // className=" py-3 text-gray-900 bg-white rounded-full outline-none cursor-pointer px-7 group focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10  dark:text-white/60"
            href="/DeependraSinghResume.pdf"
            download={true}
          >
            Download CV{" "}
            <HiDownload className="transition translate-y-0 opacity-70 group-hover:translate-y-1 hover:text-gray-950   " />{" "}
          </a>
        </ShimmerButton>
        <ShimmerButton
          className="rounded-full p-4"
          background=""
          onClick={handleLinkedin}
        >
          <a
            className="flex items-center gap-2  text-gray-700 bg-white  focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/deependrasingh/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </ShimmerButton>
        <ShimmerButton
          className="rounded-full p-4"
          background=""
          onClick={handleGithub}
        >
          <a
            className="flex items-center gap-2  text-gray-700 bg-white  focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/trdxDeepu"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </ShimmerButton>
      </motion.div>
    </section>
  );
};

export default Intro;
