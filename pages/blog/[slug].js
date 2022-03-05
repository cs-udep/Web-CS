import React from 'react';
import { useRouter } from 'next/router'
import { PostBanner, SponsoredCard, PostContent, PostLikes, PostWidget, CommentForm } from '../../Componentes';
import { getPost, getPostDetails } from '../../services'

const PostDetails = ({ posts }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <p>Loading</p>
    }
    return (
        <div className='ctn-post-article'>
            <div className='ctn-postbanner'>
                <PostBanner post={posts}/>
            </div>
            <div className='ctn-postcontent-sc'>
                <PostContent content={posts.content} language={posts.languageP}/>
                <SponsoredCard/>
            </div>
            <div className='ctn-comments'>
                <h2>Deja un comentario</h2>
                <div id='ctn-commentForm'>
                    <CommentForm/>
                </div>
            </div>
            
        </div>
    )
}

export default PostDetails;

export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug);
    return{
        props : {posts : data}
    }
}

export async function getStaticPaths() {
    const post = await getPost();
    return{
        paths : post.map(({node : {slug}})=>({params : { slug }})),
        fallback : false
    }
}