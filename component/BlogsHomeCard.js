import React from "react";
import Link from "next/link";

const BlogsHomeCard = ({ blogData }) => {
  return (
    <>
      {blogData.map((data) => {
        return (
          <div
            className="shadow-lg group container flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl
            hover:bg-indigo-700 transform transition duration-500 hover:scale-130 dark:border-gray-700 dark:bg-gray-800 "
            key={data.id}
          >
            <img
              className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg group-hover:opacity-25"
              src={data.image}
              alt={data.language}
            />
            <div className="flex flex-col justify-between p-4 leading-normal text-justify group-hover:opacity-25">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data?.content}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {`${data?.language} was invented by ${data?.invented}`}
              </p>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100 w-full">
              <div className="pt-8 text-center">
                <span className="text-3xl font-bold text-white text-center tracking-wider leading-relaxed font-sans">
                  {data?.language}
                </span>
              </div>

              <div className="p-8 text-center">
                <Link href={`/blogpost/${data?.slug}`}>
                  <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                    Read more
                  </button>
                </Link>
                <a target="_blank" href={data?.languageLink}>
                  <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg ml-3">
                    Official site
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsHomeCard;
