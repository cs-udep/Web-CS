import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const routes = [{name:"Programación", slug:"programación",content : []}]
    return (
        <nav className='ctn-header'>
            <div className='ctn-logo'>
                <Link href='/' passHref>
                    <span className='ctn-logo-text'>Computer Society</span>
                </Link>
            </div>
            
        </nav>
    )
}
/*
<div className='ctn-routes'>
                <ul className='ctn-items'>
                    { routes.map((item)=><li key={item.name} className='item'><Link href={`/Blog/${item.slug}`}><span>{item.name}</span></Link></li>) }
                </ul>
            </div>*/ 
export default Navbar;