"use client";

import React from "react";
import { motion } from "framer-motion";
import Search from "./Search";

import Link from "next/link";

export const Header = ({ searchBook }) => {
  return (
    <header className="flex justify-between items-center p-4 text-[#fff]">
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="mr-8 text-[#000] text-[1.4rem] font-bold">Book App</h1>
        <Search filterbook={searchBook} />
      </motion.div>
      <motion.div
        className="flex items-center "
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile" className="mr-4">
          <motion.img
            src="images/avatar.png"
            alt="avatar"
            className="w-[40px] h-[40px] object-cover rounded-full"
          ></motion.img>
        </Link>
      </motion.div>
    </header>
  );
};
