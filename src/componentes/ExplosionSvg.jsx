const ExplosionSvg = ({ colorGlobo }) => {
  return (
    <svg
      width='244'
      height='303'
      viewBox='0 0 500 500'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='fragments' transform='translate(250, 250)'>
        <path d='M0,-60 L15,-30 L-15,-30 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; 0,-100'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M0,60 L15,30 L-15,30 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; 0,100'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M-60,0 L-30,15 L-30,-15 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; -100,0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M60,0 L30,15 L30,-15 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; 150,0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M-42,-42 L-21,-21 L-21,-63 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; -70,-70'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M42,-42 L21,-21 L63,-21 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; 70,-70'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M-42,42 L-21,21 L-63,21 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; -70,70'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path d='M42,42 L21,21 L63,21 Z' fill={colorGlobo}>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; 70,70'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            additive='sum'
            fill='freeze'
          />
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
        <path
          id='string'
          d='M250,310 Q260,350 250,390 Q240,430 250,470'
          stroke='#FFFFFF'
          strokeWidth='3'
          fill='none'
        >
          <animate
            attributeName='opacity'
            values='1;0'
            dur='0.2s'
            repeatCount='1'
            fill='freeze'
          />
        </path>
      </g>
    </svg>
  )
}

export default ExplosionSvg
