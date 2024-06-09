import { useState } from 'react'
import Finger from '../assets/svg/finger.51fcea9.svg'
import ExplosionSound from '../assets/sound/balloon-pop.mp3'
import GloboSvg from './GloboSvg'
import ExplosionSvg from './ExplosionSvg'
import RandomImages from './RandomImages'

const Cumpleanios = () => {
  const [isExplosion, setIsExplosion] = useState(false)
  const [finConteo, setFinConteo] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [clickCount, setClickCount] = useState(1)
  const audio = new Audio(ExplosionSound)
  const [colorGlobo, setColorGlobo] = useState('#8128d0')

  const clrs = [
    '#8128d0',
    '#e35aff',
    '#ff4e64',
    '#3240af',
    '#f44336',
    '#009688',
    '#4caf50',
    '#03a9f4',
    '#9c27b0',
    '#607d8b',
  ]

  const createExplosion = () => {
    audio.play()
    setIsExplosion(true)
    setIsClick(true)
    setTimeout(() => {
      setIsExplosion(false)
      getRandomHexColor()
    }, 400)
  }

  function getRandomHexColor() {
    let numero = Math.floor(Math.random() * 10)
    setColorGlobo(clrs[numero])
  }

  return (
    <>
      {!finConteo ? (
        <div className={`contenedor ${isExplosion ? '' : 'giftbox'}`}>
          <div className='onboarding'>
            {!isClick && <img src={Finger} alt='mano indicador' className='finger' />}
          </div>
          <div className={`globo-posicion`}>
            {/* Se agrega la clase slideUpBig si hay una explosión */}
            {isExplosion ? (
              <ExplosionSvg colorGlobo={colorGlobo} />
            ) : (
              <div onClick={() => createExplosion()}>
                <GloboSvg
                  setClickCount={setClickCount}
                  clickCount={clickCount}
                  colorGlobo={colorGlobo}
                  setFinConteo={setFinConteo}
                />
              </div>
            )}
            {!isClick && (
              <p style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                Toca el globo
              </p>
            )}
          </div>
        </div>
      ) : (
        <RandomImages />
      )}
    </>
  )
}

export default Cumpleanios
