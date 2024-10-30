"use client";
import { useParams, useRouter } from "next/navigation";
import { books } from "@/app/constants/mockData";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Editor, useDomValue } from "reactjs-editor";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookPage = () => {
  const { id } = useParams();
  const route = useRouter();
  const { dom, setDom } = useDomValue();
  const selectBook = books.filter((book) => {
    return id === String(book.id);
  });
  if (!selectBook.length) return <p>Book is Not Found</p>;

  const content = selectBook[0].content;
  const midpoint = Math.ceil(content.length / 2);

  // Split content into two equal parts
  const contentPart1 = content.slice(0, midpoint);
  const contentPart2 = content.slice(midpoint);

  const notify = () => toast("Save Changes!");

  //back to home
  const backHome = () => {
    route.back();
  };

  const handleSave = () => {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };
    localStorage.setItem(
      `dom${selectBook[0].id}`,
      JSON.stringify(updatedDomValue)
    );
    notify();
  };

  useEffect(() => {
    const saveDom = localStorage.getItem(`dom${selectBook[0].id}`);
    if (saveDom) {
      setDom(JSON.parse(saveDom));
    }
  }, []);

  return (
    <motion.div
      transition={{ type: "spring", damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.9 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between p-7 items-center"
      >
        <div>
          <i
            className="fa-solid fa-chevron-left text-[20px] cursor-pointer"
            onClick={backHome}
          ></i>
        </div>
        <div>
          <h1 className=" font-bold text-[24px] uppercase ">
            {selectBook[0].title}
          </h1>
        </div>
        <div className="flex gap-6 items-center text-[20px]">
          <button
            className="pl-6  pr-6 pt-2 pb-2 border-[1px] border-[black] rounded-full"
            onClick={handleSave}
          >
            Save
          </button>
          <i className="fa-solid fa-gear"></i>
          <i className="fa-solid fa-share"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </motion.section>

      <Editor
        htmlContent={`<main class="h-[80vh] w-[95%] m-auto flex gap-4  flex-wrap">
                      <div class="w-[47.5%] bg-[#f8eadd] rounded-lg shadow-md p-8 ml-8 mb-8 ">
                         <h1 class="text-center text-[28px] mb-2 font-medium">${selectBook[0].title}</h1>
                         <p class="text-center mb-8">${selectBook[0].author}</p>
                     ${contentPart1}
                      </div>
                      <div class="w-[47.5%] bg-[#f8eadd] rounded-lg shadow-md p-8 mb-8">${contentPart2}</div>
                      
                      
                </main>`}
      />
      <ToastContainer />
    </motion.div>
  );
};

export default BookPage;
