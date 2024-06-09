import Confetti from 'react-confetti'

const Felicidades = () => {
  const confeti = {
    opacity: '0.4',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  }

  return (
    <div>
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
        <h1>Feliz Cumpleaños</h1>
      </div>
    </div>
  )
}

export default Felicidades
