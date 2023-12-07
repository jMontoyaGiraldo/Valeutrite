import { useState, useRef, useEffect } from "react";
import image from './pngwing.com (1).png'
import estilos from './Landing.module.css';

function Landing() {
const [carta , setCarta] = useState(false)
    const menuRef = useRef()
  
  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setCarta(false);
      }
    };
   
      document.addEventListener("mousedown", closeMenuOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeMenuOnOutsideClick);
    };
  }, [carta]);

  return (
    <div className={estilos.landing}>
      <h1>Para Ti</h1>
      <h2><button onClick={()=>{setCarta(!carta)}}><img src={image} alt="carta para ti" /></button></h2>
      {
         carta ?
         <div ref={menuRef}>
         <span >
         Mi Amor, Hoy me encuentro aquí, frente a estas palabras que intentan
         expresar lo que yace en lo más profundo de mi pecho. 
         <p></p>
         Sé que nuestras historias no siempre han sido fáciles, que las cicatrices del pasado aún
         se hacen sentir, pero también sé que el amor siempre me guía a ti por más que lo intente evitar.
         <p></p>
         Cuando miro hacia atrás, puedo ver las sombras de errores y
         malentendidos que nos llevaron por caminos separados, pero también veo
         la luz de los momentos felices que compartimos.
         <p></p>
         A pesar del dolor que hemos experimentado, no puedo dejar de recordar la conexión única que
         existe entre nosotros, una conexión que va más allá de las palabras y sé
         encuentra en lo más íntimo de nuestras memorias. Reconozco que la última
         vez sufrimos heridas que parecían difíciles de sanar. Pero hoy, estoy
         dispuesto a abrir mi corazón de par en par, a exponerme a la
         vulnerabilidad que implica amar, porque la verdad es que te amo más de
         lo que las palabras pueden expresar. Eres mi luz en la oscuridad, la
         razón por la que mi corazón late con fuerza, y la única persona que
         realmente conoce la esencia de quién soy. Sé que el miedo nos acecha, y
         no puedo negar que también me inunda. Pero el amor no siempre se trata
         de evitar el dolor; a veces, implica enfrentar nuestras inseguridades y
         luchar juntos por lo que realmente importa.
         <p></p> 
         Quiero intentarlo una vez más porque creo en nosotros, en la magia que creamos cuando estamos
         juntos, en la posibilidad de construir un futuro lleno de amor y
         complicidad.
         
         <p></p> Prometo aprender de nuestros errores, ser paciente en los
         momentos difíciles y celebrar cada alegría contigo. Quiero ser tu apoyo
         incondicional, tu refugio en las tormentas, y tu compañero de vida en
         cada paso del camino. Estoy dispuesto a luchar por nosotros, a aprender
         y crecer juntos, porque, sinceramente, no puedo imaginar mi vida sin ti.
         Quizás el pasado no pueda borrarse, pero el futuro está en nuestras
         manos. Quiero que este nuevo capítulo sea una oportunidad para construir
         algo más fuerte, más profundo y más hermoso. Te amo más de lo que las
         palabras pueden expresar, y estoy listo para intentarlo
          porque tú vales cada esfuerzo
         y cada sacrificio.
         <p></p> 
         Con todo mi amor Juan Manuel Montoya Giraldo
       </span></div> : null
      }
     
    </div>
  );
}
export default Landing;
