import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState();
  let { slug } = router.query;
  let query = `slug=${slug}`;
  console.log("SLUG HERE=============|", query, "|=============");

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:3000/api/blogposts?${query}`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((parsed) => {
          console.log(parsed, "parsed");
          setBlogs(parsed);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }
  }, [slug]);

  console.log("blogs", blogs);
  return (
    <>
      <div className="">
        <div className="max-w-3xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center  items-center">
          <h3 className="text-[3.5rem] font-semibold inline-block hover:text-indigo-600 transition duration-400 ease-in-out mb-2">{blogs?.title}</h3>
          <img src={blogs?.image} className="my-4 h-[100%] w-[350px] inline-block"/>
          <div className="flex flex-row mb-2">
            <h5 className="ml-4 text-gray-600">
            article about: <a href={blogs?.languageLink} className="text-indigo-600 underline">
              {blogs?.language}
              </a>
              </h5>
              <h5 className="ml-4 text-gray-600">


            invented: <a href={blogs?.languageLink} className="text-indigo-600">
              {blogs?.invented}
              </a>
              </h5>
          </div>
          <div className="text-gray-600">
          {blogs?.titleEnd}
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="ml-[35px] mt-[20px] text-[20px] font-sans p-2 items-start flex flex-col justify-start">
          <p className="max-w-[70%] mb-2 text-lg font-semibold text-gray-900 dark:text-white">{blogs?.content}</p>
          <ul  className="max-w-[70%] space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>{blogs?.ponit1}</li>
            <li>{blogs?.ponit2}</li>
            {blogs?.ponit3 && <li>{blogs?.ponit3}</li>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default slug;
