import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <header>
      <nav className="flex backdrop-blur items-center justify-center">
        <FontAwesomeIcon
          icon={faPenNib}
          className="sm:text-[3rem] text-[2rem] text-[#F18805]"
        />
        <motion.h1
          className="mx-[1rem] my-[0.5rem] sm:text-[3rem] text-[2rem] text-[#F18805]"
          initial={{opacity:0}}
          animate={{ opacity:1,scale:1.2 }}
          transition={{duration:2}}
        >
          TypeTweakery
        </motion.h1>
        <FontAwesomeIcon
          icon={faPenNib}
          className="sm:text-[3rem] text-[2rem] text-[#F18805]                                                             "
        />
      </nav>
    </header>
  );
}
