// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
// how to use - http://localhost:3000/api/blogposts?slug=how-to-learn-javascript
export default function handler(req, res) {
  console.log('req query==============',req.query)
  fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if(err){
      res.status(500).json({error:"No such blog found"})
    }
    res.status(200).json(JSON.parse(data))
  })
}


// export default function handler(req, res) {
//   console.log(req.query, "================inside API slug here")
//   res.status(200).json({ name: 'John Doe' })
// }