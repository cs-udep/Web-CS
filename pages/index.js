import Head from 'next/head'
import { PostCard, EventCard } from '../Componentes'
import { getPost, getEvent } from '../services'
import Image from 'next/image';
import TextIntro1 from '../Imagenes/TextIntro.png';
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
            <Image src={TextIntro1} alt='Texto de Bienvenida a CS' ></Image>    
            <Link href='/About'><span id='intro-btn-about'>{VerMas}</span></Link>
          </div>
          <Image id='img-intro' src={UniversidadDePiura} alt='Universidad de Piura' ></Image>
        </div>
        <div id='ctn-articles'>
          <h1>Últimos artículos</h1>
          <div className='ctn-postcard-sponsoredcard'>
            <div className='ctn-postcard'>
              {posts.map((item)=><PostCard key={item.node.title} post={item.node}/>)}
            </div>
            {/*Aqui van a ir los articulos con mas comentarios o likes */}
            <div className='ctn-sponsoredcard'>
              <h1>MiniNoticiario CS</h1>
            </div>
          </div>
        </div>
        <div id='ctn-eventcard-all'>
          <h1 id='title-eventcard'>Proximos eventos</h1>
          <div id='ctn-eventcard' >
            {events.map((item)=><EventCard key={item.node.title} event={item.node}></EventCard>)}
          </div>
        </div>
        <div id='ctn-mapUdep'>
          <div id='ctn-textMap'>
            <h1>Encuentranos</h1>
          </div>
          <iframe id='map-Udep' onScroll='no'  src='https://maps.google.com/maps?q=universidad%20de%20piura%2C%20miraflores&t=m&z=15&output=embed&iwloc=near' ></iframe>
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
