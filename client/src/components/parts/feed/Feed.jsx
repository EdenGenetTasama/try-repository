import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Feed() {
  const [post,usePost] = useState([]);

  useEffect(()=>{
    const FetchPost =async()=>{
      const respond = await axios.get("http://localhost:8800/posts/timeline/622b2255aa086d5555abea6a",()=>{});
      usePost(...respond.data);
    }
    FetchPost();
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map(p=>(
          <Posts key={p._id} post={p}/>
          ))}
      </div>
    </div>
  );
}
