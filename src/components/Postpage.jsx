import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Navigate } from "react-router-dom";


export default function PostPage(_id,title,summary, cover,content,createdAt,author) {
  const [postInfo, setPostInfo]=useState(null);
  const [redirect, setRedirect] = useState(false);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:3000/post/${id}`)
    .then(response =>{
      response.json().then(postInfo =>{
        setPostInfo(postInfo);
      })
    })
  },[]);

  if(!postInfo) return 'Unable to connect server';


  // Delete functionality which request server to delete
  async function deletePost(e){
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/post/${id}`,{
      method: 'DELETE',
      credentials: 'include',
    });
    if(response.ok){
      alert(`Post will be Deleted. Cannot be retrieved`);
      setRedirect(true);
    }
  }
  if (redirect){
    return <Navigate to={'/'}/>
  }

  return(
    <div className="postpage">
      <h1 className=" text-center pb-2">{postInfo.title}</h1>
      <time className=' text-slate-400 font-semibold text-center block text-sm'>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className='author font-semibold pr-4 text-zinc-300 text-center mb-5 text-sm'>By @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <>
        <div className="flex justify-between">
          <div className=" text-center mb-5">
            <Link to={`/edit/${postInfo._id}`} className=" bg-slate-700 text-white inline-flex p-3 pt-1 pb-1 rounded-md no-underline gap-1 items-center hover:bg-slate-600"> <FaEdit size={18} className=" float-left"/> Edit this post</Link>
          </div>
          <button className=" w-auto h-fit text-base inline-flex p-1 items-center hover:bg-blue-500" onClick={deletePost}><MdDelete size={18} className=" float-left"/>Delete this post</button>
        </div>
        </>
      )}
      <div className="image  max-h-52 flex justify-center overflow-hidden mb-4">
        <img src={`http://localhost:3000/${postInfo.cover}`} alt="" className=" object-cover object-center" />
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}