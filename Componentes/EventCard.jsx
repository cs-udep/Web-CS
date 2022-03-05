import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
const EventCard = ({event})=> {
    console.log(event.url);
    return (
        <div key={event.title} className='eventcard'>
            
            <div className='eventcard-img'>
                <Image className='img-eventcard' src={event.featureImg.url} width={event.featureImg.width} height={event.featureImg.height} alt={`img-${event.title}`} />
            </div>
            <div className='eventcard-content'>
                <Link href={`/event/${event.url}`} passHref><h1>{event.title}</h1></Link>
                <div className='eventcard-description'>
                    <p>{event.description}</p>
                </div>
            </div>
            <div className='eventcard-time'>
                <time>{moment(event.dateTime_event).format("MMM DD, YYYY")}</time>
            </div>
        </div>
        )
}

export default EventCard;