import React, { useState, useEffect } from "react";
import jss from "../../public/JS.png";
import BlogsHomeCard from "component/BlogsHomeCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [blogData, setBlogData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        return res.json()
      }).then((parsed) => {
        setBlogData(parsed);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  return (
    <>
      <div className={` ${styles.main} bg-indigo-600 w-full`}>
        <h3 className="text-6xl font-semibold text-white">Hunitng Blog</h3>
        <p className="text-2xl text-white pt-5">
          A blog for hunt the code for coder
        </p>
        <div className="inline-flex items-center justify-center w-full mt-7">
          <hr className="w-3/4 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute p-3 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900 rounded-md">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <h3 className="items-center md:flex justify-center text-2xl font-bold text-white p-8">
          Popular Blogs
        </h3>
        <div className="grid grid-cols-2 gap-5 p-5">
          <BlogsHomeCard blogData={blogData}/>
          {/* <BlogCard blogData={blogData}/> */}
        </div>
      </div>
    </>
  );
}
