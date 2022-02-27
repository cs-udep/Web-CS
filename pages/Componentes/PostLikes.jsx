import React,{useState} from 'react'

const PostLikes =({post})=>{
    const [likes, setlikes] = useState(post.like)
    const aumentar = (evt)=>{
        evt.preventDefault();
        setlikes(likes+1)
    }
    return <div>
        <span>Likes : {likes}</span>
        <button onClick={aumentar}>Aumentar Like</button>
    </div>
}
export default PostLikes;
