import React from "react";
import { blogData } from "../utils/staticData";
import { useRouter } from "next/router";
import styles from "../src/styles/Home.module.css";
import Link from "next/link";

const BlogCard = () => {
  const router = useRouter();
  const { pathname } = router;
  const [slugDetial, setSlugDetail] = React.useState('');
  const clickBlogHandler = (item) => {
    setSlugDetail(item?.language);
  };
  return (
    <>
      <div className={styles.flexparent}>
        {blogData?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() => pathname === "/blogs" && clickBlogHandler(item)}
                className={`${styles.box} relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 text-center p-10 rounded-lg row-span-2`}
              >
                <div className="mx-auto max-w-md">
                  <div className="divide-y divide-gray-300/50">
                    <div className= 'space-y-6 py-8 text-base leading-7 text-gray-600'>
                         {pathname === "/blogs" ? (
                        <Link
                          href={`blogpost/${item.title}`}
                        >
                          <p
                            className={`${
                              pathname === "/blogs" ? styles.blogCursor : ""
                            } text-3xl font-bold text-black `}
                          >
                            {item.title}
                          </p>
                        </Link>
                      ) : (
                        <p
                          className={`${
                            pathname === "/blogs" ? styles.blogCursor : ""
                          } text-3xl font-bold text-black `}
                        >
                          {item.title}
                        </p>
                      )}
                      {/* <Link href={pathname === '/blogs'? `blogpost/${item.title}`:'/'}>
                      <p className= { `${pathname==='/blogs'? styles.blogCursor:""} text-3xl font-bold text-black `}>
                        {item.title}
                      </p>
                      </Link> */}
                      <ul className="space-y-4">
                        <li className="flex">
                          <svg
                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{ marginTop: "0.9rem" }}
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-2 mt-2 text-justify">
                            {item.ponit1}
                          </p>
                        </li>
                        <li className="flex ">
                          <svg
                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{ marginTop: "0.9rem" }}
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-2 mt-2 text-justify">
                            {item.ponit2}
                          </p>
                        </li>
                        <li className="flex">
                          {item.ponit3 ? (
                            <svg
                              className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              style={{ marginTop: "0.9rem" }}
                            >
                              <circle cx="12" cy="12" r="11" />
                              <path
                                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                fill="none"
                              />
                            </svg>
                          ) : (
                            ""
                          )}
                          <p className="ml-2 mt-2 text-justify">
                            {item.ponit3}
                          </p>
                        </li>
                      </ul>
                      <p>{item.titleEnd}</p>
                    </div>
                    {/* <div className="pt-8 text-base font-semibold leading-7">
                          <p className="text-gray-900">{item.language}</p>
                          <p>
                            <a
                              href={item.languageLink}
                              className="text-sky-500 hover:text-sky-600"
                            >
                              Read the docs &rarr;
                            </a>
                          </p>
                        </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
