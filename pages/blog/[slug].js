import React from 'react'
import { PostBanner, SponsoredCard, PostContent, PostLikes } from '../Componentes';
import { getPost, getPostDetails } from '../services/index'

const PostDetails = ({ posts }) => {
    return (
        <div className='ctn-article'>
            <div className='ctn-postbanner'>
                <PostBanner post={posts}/>
            </div>
            <div className='ctn-postcontent-sc'>
                <PostContent content={posts.content} language={posts.languageP}/>
                <SponsoredCard/>
            </div>
            <div>
                <PostLikes post={posts}/>
            </div>
        </div>
    )
}

export default PostDetails;

export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug)
    return{
        props : {posts : data}
    }
}

export async function getStaticPaths() {
    const post = await getPost();

    return{
        paths : post.map(({node : {slug}})=>({params : {slug}})),
        fallback : false
    }
}