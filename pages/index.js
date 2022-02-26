
import Head from 'next/head'
import { PostCard, PostMain, PostWidget, SponsoredCard } from './Componentes'
import { getPost } from './services'


export default function Home({ posts }) {
  return (
    <div className='ctn'>
      <Head>
        <title>FreeBlog</title>
        <meta name="Blog de programacion y demas" content="Blog donde comparto lo que aprendo en programación y en mi carrera" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='ctn-postwidget'>
          <div className='postwidget-intro'>
            <p>
              Algunos Videos
            </p>
          </div>
          <PostWidget/>
        </div>
        <div className='ctn-postcard-sponsoredcard'>
          <div className='ctn-postcard'>
            {posts.map((item)=><PostCard key={item.node.title} post={item.node}/>)}
          </div>
          <div className='ctn-sponsoredcard'>
          </div>
        </div>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPost()) || [];
  return {
    props: { posts },
  };
}
