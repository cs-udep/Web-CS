import Head from 'next/head'
import { PostCard, EventCard } from '../Componentes'
import { getPost, getEvent } from '../services'
import Image from 'next/image';
import UniversidadDePiura from '../Imagenes/UniversidadDePiura.jpg'
import Link from 'next/link';

export default function Home({ posts, events }) {
  return (
    <div className='ctn'>
      <Head>
        <title>Computer Society</title>
        <meta name="Computer Society" content="Blog de computer society Udep Piura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div id='ctn-intro'>
          <div id='ctn-intro-text'>
            <span>Bienvenidos a <br></br> Computer Society <br></br> UDEP - Piura</span>
            <Link href='/About'><span id='intro-btn-about'>Conócenos</span></Link>
          </div>
          <div id='ctn-intro-img'>
            <Image id='intro-img'  objectFit='cover'  src={UniversidadDePiura} alt='Universidad de Piura' width={1347} height={628}/>
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
