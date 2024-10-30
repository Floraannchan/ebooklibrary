"use client";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { SliderBar } from "./components/SliderBar";
import { books } from "./constants/mockData";
import { BookCard } from "./components/BookCard";
import { useState } from "react";

export default function Home() {
  const [searchBook, setsearchBook] = useState(books);
  const filterBook = (book) => {
    const findBook = books.filter(
      (find) => find.title.toLocaleLowerCase() === book.toLocaleLowerCase()
    );
    setsearchBook(findBook);
  };
  return (
    <main className="w-full  m-auto md:w-[95%]">
      <div>
        <Header searchBook={filterBook} />
        <div className="flex justify-between items-start ">
          <section className="w-[15%] ">
            <SliderBar />
          </section>
          <div className="w-[85%] ml-8 mr-8 bg-[#f8eadd] p-8 rounded-2xl">
            <h1 className=" font-bold text-[2rem] mb-4">ALL BOOKS</h1>
            <ul className="flex flex-wrap">
              {searchBook.map((book, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", damping: 50, mass: 0.75 }}
                  initial={{ opacity: 0, x: 200 * (i + 1) }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <a href={`/book/${book.id}`}>
                    <BookCard
                      title={book.title}
                      img={book.image}
                      description={book.description}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
