
import Head from 'next/head'
import { PostCard, PostMain, PostWidget, SponsoredCard } from './Componentes'
import { getPost } from './services'


export default function Home({ posts }) {
  return (
    <div className='ctn'>
      <Head>
        <title>Computer Society</title>
        <meta name="Computer Society" content="Blog de computer society Udep Piura" />
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

        <div>
          <h1>Últimos artículos</h1>
          <div className='ctn-postcard-sponsoredcard'>
            <div className='ctn-postcard'>
              {posts.map((item)=><PostCard key={item.node.title} post={item.node}/>)}
            </div>
            <div className='ctn-sponsoredcard'>
            </div>
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
