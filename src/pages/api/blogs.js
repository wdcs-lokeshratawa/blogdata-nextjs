// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

// how to read files from file directory we can read this with help of
// readdir("directory_path",(err,res)=>{})
export default async function handler(req, res) {
  //first read directory of file
  const data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  // iterate in forlop
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // read file name filedirectory name from loop and concat with path of file
    myFile = await fs.promises.readFile(("blogdata/" + element),"utf8");
    // here myfile type is string so we hae to parse it and push into an array
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs)
}
