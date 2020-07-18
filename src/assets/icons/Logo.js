import React from 'react'
import { omit } from 'lodash'

const Logo = props => {
  const color = props.isDarkTheme ? '#fff' : '#000'
  return (
    <svg width={149} height={21} fill='none' {...omit(props, ['isDarkTheme'])}>
      <path
        opacity={0.5}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M86.028.712v19h12.526v-4.275H90.29v-3.206h5.9V8.194h-5.9V4.987h8.264V.712H86.028zM119.825.712v19h12.526v-4.275h-8.264v-3.206h5.9V8.194h-5.9V4.987h8.264V.712h-12.526zM111.435 19.712h-4.255v-7.125L101.272.712h4.727l3.368 6.65 3.184-6.65h4.727l-5.843 11.744v7.256zM141.19 20.21c4.213.294 6.743-2.584 6.953-5.57.19-2.717-1.391-5.179-4.709-6.086l-2.334-.65c-1.205-.327-1.681-1.036-1.617-1.95.073-1.05 1.09-1.98 2.561-1.876 1.316.092 2.339.367 3.522 1.27 0 0 1.601-3.168 1.587-3.183-.96-.972-2.744-1.707-4.82-1.852-3.39-.236-6.509 2.087-6.761 5.691-.198 2.825 1.471 5.104 4.419 5.931l2.384.653c1.154.324 1.828 1.074 1.761 2.043-.083 1.183-1.087 1.924-2.632 1.816-1.969-.137-3.037-.884-4.056-2.465l-1.714 3.5c1.065 1.42 2.819 2.543 5.456 2.728z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M44.432 4.987v14.725h-4.254V4.987h-5.672V.712h15.598v4.275h-5.672zM6.373 19.708H0V.712h6.373c5.975 0 10.112 4.095 10.112 9.441 0 5.4-4.136 9.555-10.112 9.555zm5.731-9.443v-.055c0-3.365-2.3-5.698-5.723-5.698H4.254v11.4h2.127c3.423 0 5.723-2.282 5.723-5.647z'
        fill={color}
      />
      <path
        opacity={0.7}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M75.983 14.963l5.909-11.875-3.781-1.9-6.854 13.774h4.726z'
        fill='url(#prefix__paint0_linear)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M68.893.712h-4.727l9.454 19 2.364-4.75-7.09-14.25z'
        fill={color}
      />
      <path
        d='M80.001 4.275a2.132 2.132 0 002.127-2.138C82.128.958 81.176 0 80.001 0a2.132 2.132 0 00-2.127 2.138c0 1.18.953 2.137 2.127 2.137z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.352 9.619l-2.245 4.512h4.49L26.352 9.62zm-4.786 10.093H16.78L26.293.356l9.63 19.356h-4.785l-1.005-2.018h-7.562l-1.005 2.018zM58.022 9.619l-2.246 4.512h4.49L58.023 9.62zm-4.55 10.093h-4.786L58.199.356l9.63 19.356h-4.785l-1.005-2.018h-7.563l-1.004 2.018z'
        fill={color}
      />
      <defs>
        <linearGradient
          id='prefix__paint0_linear'
          x1={79.138}
          y1={2.491}
          x2={72.585}
          y2={10.294}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={color} />
          <stop offset={1} stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
