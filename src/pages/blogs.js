import React,{useEffect, useState} from 'react'
import BlogCard from 'component/BlogCard'
import styles from "../styles/Home.module.css";

const Blogs = () => {
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
    <div className={` ${styles.main} bg-indigo-600 w-full`}>
       <div className="grid grid-cols-2 gap-5 p-5">
          <BlogCard blogData={blogData} />
        </div>
    </div>
  )
}

export default Blogs