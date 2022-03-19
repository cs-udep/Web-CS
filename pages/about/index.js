import React from 'react'
import Image from 'next/image'
import FotoAlvaro from "../../Imagenes/FotoAlvaro.jpg";
import FotoTomas from "../../Imagenes/FotoTomas.png";
function About() {
  const directiva = [
    {img: FotoAlvaro,nombre : "Alvaro Felipe", descripcion : "Just Do it", cargo : "Presidente"},
    {img:FotoTomas, nombre : "Tomas Seclén", descripcion: "Una ambición es un sueño equipado con un motor V8", cargo : "Tesorero"}
  ]
  return (
    <div id='ctn-about'>
      <div >
        <h1>Quienes somos ? </h1>
        <p>Somo un grupo estudiantil, amantes de la programación y tecnología.</p>
        <p></p>
      </div>
      <div>
        <h1>Nuestra directiva</h1>
        {
          directiva.map((item)=>{
            return <div key={item.nombre}>
              <Image src={item.img} width={450} height={600}></Image>
              <h1>{item.nombre}</h1>
              <p>Cargo : {item.cargo}</p>
              <p style={{fontWeight:'bold'}}>Descripcion :{item.descripcion}</p>
              </div>
          })
        }
      </div>
    </div>
  )
}

export default About