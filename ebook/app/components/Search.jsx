"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { books } from "../constants/mockData";

const Search = ({ filterbook }) => {
  const [text, settext] = useState("");

  return (
    <div className="flex justify-center">
      <motion.input
        type="text"
        placeholder="Tell What you want to read you can find .."
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pl-8 pr-8 pt-3 pb-3 ml-1 rounded-full bg-[rgb(248,234,221)] border-2 border-black min-w-[100px] text-[black] md:ml-7 md:min-w-[400px]"
        onChange={(e) => settext(e.target.value)}
      ></motion.input>
      <button
        onClick={() => filterbook(text)}
        className=" text-[24px] text-black ml-4 "
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
