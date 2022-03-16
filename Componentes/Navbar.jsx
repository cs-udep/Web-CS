import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UDEPCSLOGO from '../Imagenes/UDEP-CS.png';


const Navbar = () => {
    const routes = [
        {name : 'Blog', slug : 'blog'},
        {name : 'Conocenos', slug : 'about'}
    ]
    return (
        <nav className='ctn-header'>
            <div className='ctn-logo'>
                <Link href='/' passHref>
                    <Image src={UDEPCSLOGO}  alt='Logo de Universidad de Piura y Computer Society' width={339} height={89}/>
                </Link>
            </div>
            <div className='ctn-routes'>
                <ul className='ctn-items'>
                    { routes.map((item)=><li key={item.name} className='item'><Link href={`/${item.slug}`}><span>{item.name}</span></Link></li>) }
                </ul>
            </div>
        </nav>
    )
}
/*
*/ 
export default Navbar;