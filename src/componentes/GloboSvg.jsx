const GloboSvg = ({ clickCount, setClickCount, colorGlobo, setFinConteo }) => {
  function handleBalloonClick() {
    if (clickCount < 5) {
      const newClickCount = clickCount + 1
      setClickCount(newClickCount)
    } else {
      setFinConteo(true)
    }
  }

  return (
    <svg
      width='244'
      height='303'
      xmlns='http://www.w3.org/2000/svg'
      onClick={() => handleBalloonClick()}
    >
      <g fill='none' fillRule='evenodd'>
        <g>
          <g>
            <ellipse
              fill={colorGlobo}
              fillRule='nonzero'
              cx='121.752'
              cy='128.286'
              rx='48.752'
              ry='59.286'
            ></ellipse>
            <path
              d='M122.796 183.923l7.888 13.523a1.5 1.5 0 01-1.296 2.256H113.612a1.5 1.5 0 01-1.296-2.256l7.888-13.523a1.5 1.5 0 012.592 0z'
              fill={colorGlobo}
            ></path>
            <ellipse
              fill='#FFF'
              opacity='.25'
              cx='93.204'
              cy='131.7'
              rx='8.083'
              ry='23.1'
            ></ellipse>
          </g>
          <path
            stroke='#D5D5D5'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M121.871 204L121 303'
          ></path>
          <text
            fontFamily='RobotoSlab-Bold, Roboto Slab'
            fontSize='36'
            fontWeight='bold'
            fill='#FFF'
          >
            <tspan x='121' y='142' textAnchor='middle'>
              {clickCount}
            </tspan>
          </text>
        </g>
        <animateTransform
          attributeType='XML'
          attributeName='transform'
          type='translate'
          values='0 0; 0 -20; 0 0'
          dur='2s'
          repeatCount='indefinite'
        />
      </g>
    </svg>
  )
}

export default GloboSvg
