import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

// Importa todas las imágenes
import img1 from '../assets/image/caracol.png'
import img2 from '../assets/image/cerdo.png'
import img3 from '../assets/image/cerezas.png'
import img4 from '../assets/image/cerveza.png'
import img5 from '../assets/image/flor-azul.png'
import img6 from '../assets/image/flor-morado.png'
import img7 from '../assets/image/flor2-morada.png'
import img8 from '../assets/image/flores.png'
import img9 from '../assets/image/gato.png'
import img10 from '../assets/image/gato02.png'
import img11 from '../assets/image/hongo.png'
import img12 from '../assets/image/mariquita.png'
import img13 from '../assets/image/oso.png'
import img14 from '../assets/image/pina.png'
import img15 from '../assets/image/sirena.png'
import img16 from '../assets/image/sirena02.png'
import HappyBirthday from '../assets/sound/happy-birthday.mp3'

const RandomImages = () => {
  const [positions, setPositions] = useState([])
  const audio = new Audio(HappyBirthday)
  const imageSources = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ]
  const confeti = {
    opacity: '0.3',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  }
  const imageSize = 40 // Ajusta el tamaño de las imágenes según sea necesario
  const numImages = 300
  const maxAttempts = 1000

  useEffect(() => {
    audio.play()
    const newPositions = []

    for (let i = 0; i < numImages; i++) {
      let attempts = 0
      let validPosition = false

      while (attempts < maxAttempts && !validPosition) {
        const top = Math.random() * (window.innerHeight - imageSize)
        const left = Math.random() * (window.innerWidth - imageSize)
        const overlap = newPositions.some(
          (pos) =>
            Math.abs(pos.top - top) < imageSize && Math.abs(pos.left - left) < imageSize
        )

        if (!overlap) {
          newPositions.push({
            top,
            left,
            image: imageSources[Math.floor(Math.random() * imageSources.length)],
          })
          validPosition = true
        }

        attempts++
      }
    }

    setPositions(newPositions)
  }, [])

  return (
    <div className='image-container'>
      {positions.map((pos, index) => (
        <img
          key={index}
          src={pos.image}
          alt={`Random ${index}`}
          className='random-image'
          style={{
            position: 'absolute',
            width: `${imageSize}px`,
            height: `${imageSize}px`,
            top: `${pos.top}px`,
            left: `${pos.left}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      {true && (
        <div style={{ zIndex: '10' }}>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight + 100}
            style={confeti}
          />
        </div>
      )}
      <div data-aos='zoom-in' className='contenedor-felicidades'>
        <h1>
          ¡Feliz Cumpleaños, Lupita! 🎉🌟 <br />
          <br />
          Te deseo lo mejor en esta nueva vuelta al sol. 🎂🌞 Que este nuevo año esté
          lleno de momentos mágicos, risas infinitas, y sueños cumplidos. <br />
          <br /> 🌈✨ Que cada día sea una oportunidad para brillar más y más, y tú lo
          haces de manera espectacular. ¡Disfruta de tu día al máximo y que todos tus
          deseos se hagan realidad! <br />
          <br />
          🎁🎉 Con mucho cariño 🌸💖
        </h1>
      </div>
    </div>
  )
}

export default RandomImages
