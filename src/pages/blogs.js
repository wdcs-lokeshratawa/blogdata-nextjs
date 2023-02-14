import React,{useState} from 'react'
import BlogCard from 'component/BlogCard'
import styles from "../styles/Home.module.css";

const Blogs = () => {
  const [cursor,setCursor] = useState(false)
 
  return (
    <div className={` ${styles.main} bg-indigo-600 w-full`}>
       <div class="grid grid-cols-2 gap-5 p-5">
          <BlogCard blogHandler={setCursor} cursor={cursor}/>
        </div>
    </div>
  )
}

export default Blogs