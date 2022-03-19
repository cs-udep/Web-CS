import React from 'react'
import { PostCard } from '../../Componentes';
import { getAllPosts, getCategories } from '../../services'

export default function Index({posts, categories}) {
  return (
    <div className='main-blog'>
        <h1>Principales Articulos de la semana</h1>
        <div id='ctn-blog-postcard'>
            <div className='blog-postcard'>
                <div className='ctn-postcard'>
                    {posts.map((item)=><PostCard key={item.node.title} post={item.node} />)}
                </div>
                <div>
                    {categories.map((item)=><div key={item.name} className='ctn-categorie'> 
                        <p>{item.name}</p>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
    )
}

export async function getStaticProps(){
    const posts = (await getAllPosts()) || [];
    const categories = (await getCategories()) || [];
    return{
        props : { posts, categories },
    };
}