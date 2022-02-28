import React from 'react'
import { getEventDetails, getEvent } from '../../services';
import { PostContent } from '../../Componentes';
import Image from 'next/image';
export default function EventDetails({ events }) {
  const { featureImg, title, dateTime_event } = events
  return (
    <div className='ctn-event-article'>
      <div className='ctn-eventbanner'> 
        <Image className='img-eventbanner' objectFit='cover' width={featureImg.width} height={featureImg.height} src={featureImg.url} />
      </div>
      <div>
        <div>
          <PostContent content={events.content} ></PostContent>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({params}) {
  const data = await getEventDetails(params.url);
  return {
    props : { events : data }
  }
}

export async function getStaticPaths() {
  const event = await getEvent();
  return{
    paths : event.map(({ node : {url} })=>({params : { url }})),
    fallback : false
  }
}


