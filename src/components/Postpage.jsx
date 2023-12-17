import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function PostPage() {
  const [postInfo, setPostInfo]=useState(null);
  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:3000/post/${id}`)
    .then(response =>{
      response.json().then(postInfo =>{
        setPostInfo(postInfo);
      })
    })
  },[]);

  if(!postInfo) return '';

  return(
    <div className="postpage">
      <div className="image">
        <img src={`http://localhost:3000/${postInfo.cover}`} alt="" />
      </div>
      <h1>{postInfo.title}</h1>
      <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}