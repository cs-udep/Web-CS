import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
    return (
        <div className='postcard'>
            <div className='postcard-img'>
                <img className='img-postcard' src={post.featureImage.url} alt={`img-${post.title}`}/>
            </div>
            <div className='postcard-content'>               
                <Link href={`/blog/${post.slug}`}><h1 className='title-postcard'>{post.title}</h1></Link>
                
                <div className='postcard-description'>
                    <p>{post.description}</p>
                </div>
                <div className='postcard-author'>
                    {
                        post.author.map((item)=>{
                            return <div className='author'>
                                <img className='author-photo' src={item.profilePhoto.url} alt={item.name}>
                                </img>
                                <span className='author-name'>By {item.name}</span>
                            </div>
                        })
                    }
                </div>
                <div className='postcard-cat-time'>
                    <div className='postcard-categories'>
                        {
                            post.category.map((cat)=><p  key={cat.name} className='categorie'># {cat.name}</p>)
                        }
                    </div>
                    <div className='postcard-time'>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z"/></g></svg>
                        <time>{moment(post.createdAt).format("MMM DD, YYYY")}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostCard;
