import Head from 'next/head'
import { PostCard, EventCard } from '../Componentes'
import { getPost, getEvent } from '../services'
import UniversidadDePiura from '../Imagenes/UDEP 2.png';
import Link from 'next/link';

export default function Home({ posts, events }) {
  const VerMas = 'Ver más >>'
  return (
    <div id='ctn'>
      <Head>
        <title>Computer Society</title>
        <meta name="Computer Society" content="Blog de computer society Udep Piura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div id='ctn-intro'>
          <div id='ctn-intro-text'>
            <p className='banner-text'><span>Conoce a </span></p>
            <p className='banner-text'><span>nuestra directiva 2022</span></p>
            <Link href='/About'><span id='intro-btn-about'>{VerMas}</span></Link>
          </div>
        </div>
        <div id='ctn-articles'>
          <h1>Últimos artículos</h1>
          <div className='ctn-postcard-sponsoredcard'>
            <div className='ctn-postcard'>
              {posts.map((item)=><PostCard key={item.node.title} post={item.node}/>)}
            </div>
            {/*Aqui van a ir los articulos con mas comentarios o likes */}
            <div className='ctn-sponsoredcard'>
            </div>
          </div>
        </div>
        <div id='ctn-eventcard-all'>
          <h1 id='title-eventcard'>Proximos eventos</h1>
          <div id='ctn-eventcard'>
            {events.map((item)=><EventCard key={item.node.title} event={item.node}></EventCard>)}
          </div>
        </div>
        <div className='ctn-sendmailer'>

        </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPost()) || [];
  const events = (await getEvent()) || [];
  return {
    props: { posts, events },
  };
}
